echo "Enter commit message:"
read v
git init
git remote add github git@github.com:yjaouhar/piscine-js.git
git remote add zone01 https://learn.zone01oujda.ma/git/yjaouhar/piscine-js.git
git add .
git commit -m "$v"
git push github master  # Push to GitHub
git push zone01 master  # Push to the second remote