   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Go to `http://localhost:5173`
   - Your photo should appear in the Hero section!

---

### **Step 7: Deploy Your Portfolio**

Once your photo is in place, you can deploy to:

**Option 1: Netlify (Easiest)**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire portfolio folder
3. Your site will be live in seconds!

**Option 2: Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

**Option 3: GitHub Pages**
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be live at `yourusername.github.io/portfolio`

---

## 🔧 **Troubleshooting**

### **Photo Not Showing?**

**Check these:**
1. ✅ File name is exactly `profile-photo.jpg` (case-sensitive!)
2. ✅ File is in the `public/` folder (not `src/`)
3. ✅ File extension matches (`.jpg` or `.png`)
4. ✅ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### **Want to Use a Different File Name?**

If you want to use a different name (e.g., `my-photo.png`), you'll need to update the code:

**In `src/components/Hero.tsx`, change line 35:**
