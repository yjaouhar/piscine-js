echo "Enter commit message:"
read v
git add .
git commit -m "$v"
git push