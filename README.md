[🇫🇷 README FR](README.fr.md)

# AI Dataset Collector - Userscript Installation

This guide explains how to manually install the **AI Dataset Collector** userscript using the automatic update feature.

## 📋 Prerequisites

Before starting, ensure that you have installed a userscript manager extension on your browser.

## 🚀 Installation

Installation is performed by creating a "stub" (a placeholder script) that will automatically download the source code from GitHub.

### Step 1: Create a new script
1. Open your script manager dashboard.
2. Add a new script.

### Step 2: Configure the source
Clear all default code present in the editor and copy-paste **only** the following lines:

```javascript
// ==UserScript==
// @name         AI Dataset Collector
// @namespace    http://tampermonkey.net/
// @version      AI Dataset Collector Installer
// @downloadURL  https://github.com/Mulooooo/ai-dataset-collector/raw/refs/heads/main/userscript.js
// ==/UserScript==
```

Tested with Violentmonkey on Firefox and LibreWolf, and Tampermonkey on Chrome and Opera/OperaGX.