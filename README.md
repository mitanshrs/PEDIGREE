# PEDIGREE | Supply Chain & Identity Registry
A terminal-inspired, browser-based asset tracking system designed for managing item blueprints, production batches, and unique unit identities with a full custody history log.
## 🚀 Overview
PEDIGREE provides a lightweight, local-first solution for tracking the provenance and movement of assets. It uses a structured ID system (12-digit Item-6-char Batch-1-digit Unit) to ensure granular tracking of every single unit produced.
## 🛠️ Key Features
- **Triple-Tier Registry:** Manage Blueprints (Items), Batches, and Unique Identities.
- **Custody Logging:** Automatic history generation for every transfer of ownership.
- **Recursive Purging:** Intelligent deletion logic (e.g., deleting a batch removes all units within it).
- **Data Portability:** Export your entire database as a .js file and import it on any device.
## 📂 Project Structure
- `index.html`: System dashboard and overview.
- `write.html`: The encoding module for creating new records.
- `read.html`: Query module for searching and decoding IDs.
- `edit.html`: Management hub for transfers, log edits, and record deletion.
- `list.html`: Registry manifest for browsing all sectors.
- `transfer.html`: Sync, backup, and reset protocols
- `settings.html`: Edit Themes, and the colour of the website
- `logic.js` & `style.css`: The engine and aesthetic core.
## 📖 Quick Start
- **Create a Blueprint:** Go to WRITE, select Item mode, and enter a 12-digit ID.
- **Initialise Batch:** Create a 6-character batch code.
- **Mint Identity:** Link the Item and Batch with a Unit ID (1-9).
- **Track:** Use the READ tab to view the custody log or EDIT to record a transfer.
## 👤 Maker
Developed by Mitansh Udernani.
> Note: This system uses LocalStorage for data persistence. For multi-device synchronization, use the Export/Import features in the SYNC tab.
