# Crawler

## Como usar
Os comandos abaixo devem ser feitos via terminal dentro da pasta app.

* ``npm run trends <subreddits>`` : Imprime no terminal as threads com 5000 ou mais de score no subreddit, os subreddits passados por parâmetro devem estar separados por vírgula(,);

* ``npm run bot`` : Inicializa o bot de telegram para informar as threads com 5000 ou mais de score no subreddit, a informação é recuperada utilizando o comando `/NadaPraFazer` seguindo dos subreddits desejados separados por vírgula(,);

## Tecnologias Utilizadas
A aplicação foi feita em NodeJs, utilizando o pacote __Commander__ para fazer a interface CLI, o __Boxen__ e __Chalk__ foram utilizados para formatar o texto no terminal. Para fazer a interface com o Telegram Bot foi utilizado o pacote __node-telegram-bot-api__ enquanto o Bot do Telegram foi configurado via BotFather

## Telegram Bot
Para acessar o bot do telegram, o link é https://t.me/RedditNFKBot.

## Observação
Nenhum teste unitário nesse projeto devido ao tempo de desenvolvimento.

# Desafio 2: Crawlers

Parte do trabalho na IDwall inclui desenvolver *crawlers/scrapers* para coletar dados de websites.
Como nós nos divertimos trabalhando, às vezes trabalhamos para nos divertir!

O Reddit é quase como um fórum com milhares de categorias diferentes. Com a sua conta, você pode navegar por assuntos técnicos, ver fotos de gatinhos, discutir questões de filosofia, aprender alguns life hacks e ficar por dentro das notícias do mundo todo!

Subreddits são como fóruns dentro do Reddit e as postagens são chamadas *threads*.

Para quem gosta de gatos, há o subreddit ["/r/cats"](https://www.reddit.com/r/cats) com threads contendo fotos de gatos fofinhos.
Para *threads* sobre o Brasil, vale a pena visitar ["/r/brazil"](https://www.reddit.com/r/brazil) ou ainda ["/r/worldnews"](https://www.reddit.com/r/worldnews/).
Um dos maiores subreddits é o "/r/AskReddit".

Cada *thread* possui uma pontuação que, simplificando, aumenta com "up votes" (tipo um like) e é reduzida com "down votes".

Sua missão é encontrar e listar as *threads* que estão bombando no Reddit naquele momento!
Consideramos como bombando *threads* com 5000 pontos ou mais.

## Entrada
- Lista com nomes de subreddits separados por ponto-e-vírgula (`;`). Ex: "askreddit;worldnews;cats"

### Parte 1
Gerar e imprimir uma lista contendo a pontuação, subreddit, título da thread, link para os comentários da thread e link da thread.
Essa parte pode ser um CLI simples, desde que a formatação da impressão fique legível.

### Parte 2
Construir um robô que nos envie essa lista via Telegram sempre que receber o comando `/NadaPraFazer [+ Lista de subrredits]` (ex.: `/NadaPraFazer programming;dogs;brazil`)

### Dicas
 - Use https://old.reddit.com/
 - Qualquer método para coletar os dados é válido. Caso não saiba por onde começar, procure por JSoup (Java), SeleniumHQ (Java), PhantomJS (Javascript) e Beautiful Soup (Python).
