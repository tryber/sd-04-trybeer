clear

# update gitignore
echo "atualizando o gitignore..."
echo "node_modules/
instalar
package.json
package-lock.json
.stylelintignore
corrigir
.eslintignore" >./.gitignore
sleep 2

# add eslintignore
echo "adicionando eslintignore..."
echo "node_modules" >./.eslintignore
sleep 2

# install packages
echo "instalando alguns pacotes..."
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react stylelint stylelint-config-standard
sleep 2
npm install
sleep 1

# install packages
echo "adicionando permissão ao script..."
chmod +x ./corrigir
sleep 2

# how use?
echo ""
echo "Como usar?"
echo "-> Escreva ./corrigir no terminal <-"
sleep 2
