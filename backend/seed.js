const mysql = require('mysql2/promise');
require('dotenv').config();

async function seed() {
    let connection;
    try {
        const dbUrlStr = process.env.DATABASE_URL || 'mysql://root:@localhost:3306/emi_hub';
        console.log(`Connecting to: ${dbUrlStr}`);

        // Properly parse the URL to handle Aiven SSL configurations
        const url = new URL(dbUrlStr);
        const sslRequired = url.searchParams.get('ssl-mode') === 'REQUIRED';
        const dbName = url.pathname.replace('/', '') || 'emi_hub';

        const connectionOptions = {
            host: url.hostname,
            port: url.port,
            user: url.username,
            password: url.password,
            database: dbName,
            ssl: sslRequired ? { rejectUnauthorized: false } : undefined
        };

        // Create database if it doesn't exist (only practical if we have privileges, but works for local)
        if (!process.env.DATABASE_URL) {
            connectionOptions.database = undefined;
            connection = await mysql.createConnection(connectionOptions);
            await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
            await connection.query(`USE ${dbName}`);
        } else {
            connection = await mysql.createConnection(connectionOptions);
        }

        console.log("Dropping existing tables...");
        await connection.query('DROP TABLE IF EXISTS emi_plans');
        await connection.query('DROP TABLE IF EXISTS products');

        console.log("Creating tables...");
        await connection.query(`
            CREATE TABLE products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE NOT NULL,
                variant VARCHAR(255) NOT NULL,
                storage VARCHAR(255) NOT NULL,
                mrp INT NOT NULL,
                price INT NOT NULL,
                variantImages JSON,
                variants JSON,
                storages JSON
            )
        `);

        await connection.query(`
            CREATE TABLE emi_plans (
                id INT AUTO_INCREMENT PRIMARY KEY,
                product_id INT NOT NULL,
                tenure INT NOT NULL,
                amount INT NOT NULL,
                interest DECIMAL(5,2) DEFAULT 0,
                cashback INT DEFAULT 0,
                FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
            )
        `);

        console.log("Inserting iPhone 17 Pro...");
        const [iphoneRes] = await connection.query(`
            INSERT INTO products (name, slug, variant, storage, mrp, price, variantImages, variants, storages)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            "Apple iPhone 17 Pro", "iphone-17-pro", "Silver", "256 GB", 139900, 134900,
            JSON.stringify({
                "Silver": ["main.png", "camera.png", "side.png", "features.png", "lineup.png"],
                "Titanium": ["titanium.png", "camera.png", "side.png", "features.png", "lineup.png"],
                "Gold": ["gold.png", "camera.png", "side.png", "features.png", "lineup.png"],
                "Black": ["black.png", "camera.png", "side.png", "features.png", "lineup.png"]
            }),
            JSON.stringify(["Silver", "Titanium", "Gold", "Black"]),
            JSON.stringify(["128 GB", "256 GB", "512 GB", "1 TB"])
        ]);

        await connection.query(`
            INSERT INTO emi_plans (product_id, tenure, amount, interest, cashback)
            VALUES 
            (?, 6, 22480, 0, 0),
            (?, 9, 14987, 0, 0),
            (?, 12, 11240, 0, 0),
            (?, 18, 8500, 10.5, 2000)
        `, [iphoneRes.insertId, iphoneRes.insertId, iphoneRes.insertId, iphoneRes.insertId]);


        console.log("Inserting Samsung S24 Ultra...");
        const [samsungRes] = await connection.query(`
            INSERT INTO products (name, slug, variant, storage, mrp, price, variantImages, variants, storages)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            "Samsung Galaxy S24 Ultra", "samsung-s24-ultra", "Titanium Gray", "512 GB", 129999, 124999,
            JSON.stringify({ "Titanium Gray": ["main.png", "camera.png"] }),
            JSON.stringify(["Titanium Gray", "Titanium Black"]),
            JSON.stringify(["256 GB", "512 GB", "1 TB"])
        ]);

        await connection.query(`
            INSERT INTO emi_plans (product_id, tenure, amount, interest, cashback)
            VALUES 
            (?, 6, 20833, 0, 0),
            (?, 12, 10416, 0, 0)
        `, [samsungRes.insertId, samsungRes.insertId]);


        console.log("Inserting Google Pixel 9 Pro...");
        const [pixelRes] = await connection.query(`
            INSERT INTO products (name, slug, variant, storage, mrp, price, variantImages, variants, storages)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            "Google Pixel 9 Pro", "pixel-9-pro", "Porcelain", "256 GB", 99999, 94999,
            JSON.stringify({ "Porcelain": ["main.png"] }),
            JSON.stringify(["Porcelain", "Obsidian"]),
            JSON.stringify(["128 GB", "256 GB", "512 GB"])
        ]);

        await connection.query(`
            INSERT INTO emi_plans (product_id, tenure, amount, interest, cashback)
            VALUES (?, 6, 15833, 0, 0)
        `, [pixelRes.insertId]);

        console.log("Database seeded successfully!");

    } catch (err) {
        console.error("Error seeding DB:", err);
    } finally {
        if (connection) await connection.end();
    }
}

seed();
