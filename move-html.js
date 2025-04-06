import fs from "fs/promises";
import path from "path";

const distDir = ".vitepress/dist";

async function moveHtmlFiles(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await moveHtmlFiles(fullPath);
    } else if (file.endsWith(".html") && file !== "index.html") {
      const name = file.replace(".html", "");
      const newDir = path.join(dir, name);
      const newPath = path.join(newDir, "index.html");

      await fs.mkdir(newDir, { recursive: true });
      await fs.rename(fullPath, newPath);

      console.log(`Перемещён: ${file} → ${newPath}`);
    }
  }
}

(async () => {
  await moveHtmlFiles(distDir);
})();
