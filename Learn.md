Novas descobertas!

target="_blank" - serve para abrir o link do href em uma nova janela ou nova aba no navegador.

link do whatsapp direto com mensagem de boas vindas - utilizar após a última barra após o número ?text=
para separar com espaço utilizar %20 
para pular linha utilizar %0A
NÃO precisa fechar a barra ao final da mensagem.






// bodyThing.classList.toggle('open');

        const activeThing = bodyThing.classList.contains('open')

        if (activeThing) {
            bodyThing.classList.remove('open');
        } else {
            bodyThing.classList.add('open');
        } 


https://wa.me/55${profileData.phone.replace(/\D/g, '')}/?text=Olá%20Angello,%0Agostaria%20de%20entrar%20em%20contato%20com%20você!

    .replace(/\D/g, '')
        \D identifica qualquer caractere que não seja um número.
        g faz a substituição de todas as ocorrências.
        '' substitui esses caracteres por nada, removendo-os.

https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profileData.location)}

    O resultado será um link de pesquisa do Google Maps para Cuiabá - MT. Se você mudar o JSON para outra cidade, o link será atualizado automaticamente quando seu código gerar a URL. O formato maps/search/?api=1&query=... é documentado pelo Google e não exige uma chave de API.

    O encodeURIComponent() transforma espaços e caracteres especiais em um formato adequado para uma URL.