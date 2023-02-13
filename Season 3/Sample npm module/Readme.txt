npm => node packages module

----------commands----------------
check npm verison =>                        npm --version
setup npm in project =>                     npm init
run scripts =>                              npm run ****(your script name in package.json script)
install package just in your project =>     npm install --save-dev ****(your framework name want install)
----------------------------------



------------package.json----------
scripts => making command for your project
Ex: npm run test

devDependencies => your framework installed in your project
When you give the project to another person, he will install the frameworks that are in devDependencies in your project for him by running the 'npm install' command.
---------------------------------




-----------.gitignore------------
The name of the file or folders that are in .gitignore. It is not considered when pushing the code in Git.
---------------------------------




-----------package-lock----------
When we want to run the project in another place, the packages should be exactly the ones that are installed and run locally
---------------------------------


