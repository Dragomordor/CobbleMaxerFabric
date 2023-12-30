"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var main_exports = {};
__export(main_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(main_exports);
const translations = {
  name: "Portuguese",
  strings: {
    "namelocked": "namelocked",
    "locked": "locked",
    "autoconfirmed": "verificados",
    "trusted": "confi\xE1veis",
    "Please follow the rules:": "Por favor siga as regras:",
    "[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules": "/pages/rules-pt",
    "Global Rules": "Regras Globais",
    "${room} room rules": "Regras da Sala ${room}",
    "<strong>Global ranks</strong>": "<strong>Cargos Globais</strong>",
    "+ <strong>Global Voice</strong> - They can use ! commands like !groups": "+ <strong>Global Voice</strong> - Eles podem usar comandos com !, tal como !groups",
    "\xA7 <strong>Section Leader</strong> - They oversee rooms in a particular section": "\xA7 <strong>Section Leader</strong> - Eles supervisionam salas de uma se\xE7\xE3o espec\xEDfica",
    "% <strong>Global Driver</strong> - Like Voice, and they can lock users and check for alts": "% <strong>Global Driver</strong> - Como Voice, al\xE9m de poderem dar locks e verificar contas alternativas",
    "@ <strong>Global Moderator</strong> - The above, and they can globally ban users": "@ <strong>Global Moderator</strong> - O de cima, al\xE9m de poderem banir usu\xE1rios do servidor",
    "* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>Global Bot</strong> - Igual ao cargo de Moderator, mas deixa claro que o usu\xE1rio \xE9 um bot",
    "&amp; <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally": "&amp; <strong>Global Administrator</strong> - Eles podem fazer qualquer coisa, como mudar o que esta mensagem diz",
    "<strong>Room ranks</strong>": "<strong>Cargos da Sala</strong>",
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.": "^ <strong>Prize Winner</strong> - Eles n\xE3o t\xEAm poder algum al\xE9m de um s\xEDmbolo.",
    "+ <strong>Voice</strong> - They can use ! commands like !groups": "+ <strong>Voice</strong> - Eles podem usar comandos com !, tal como !groups",
    "% <strong>Driver</strong> - The above, and they can mute and warn": "% <strong>Driver</strong> - O de cima, al\xE9m de poderem dar mutes e avisos",
    "@ <strong>Moderator</strong> - The above, and they can room ban users": "@ <strong>Moderator</strong> - O de cima, al\xE9m de poderem banir usu\xE1rios da sala",
    "* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>Bot</strong> - Igual ao cargo de Moderator, mas deixa claro que o usu\xE1rio \xE9 um bot",
    "# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it": "# <strong>Room Owners</strong> - Eles s\xE3o os l\xEDderes da sala e podem control\xE1-la quase totalmente",
    "/help OR /h OR /? - Gives you help.": "/help OU /h OU ? - Oferece-lhe ajuda.",
    "For an overview of room commands, use /roomhelp": "Para uma vis\xE3o geral dos comandos de sala, use /roomhelp",
    "For details of a specific command, use something like: /help data": "Para detalhes acerca de um comando espec\xEDfico, use, por exemplo, /help data",
    "COMMANDS": "COMANDOS",
    "BATTLE ROOM COMMANDS": "COMANDOS DO CHAT DE BATALHA",
    "OPTION COMMANDS": "COMANDOS DE OP\xC7\xD5ES",
    "INFORMATIONAL/RESOURCE COMMANDS": "COMANDOS INFORMATIVOS E/OU DE RECURSOS",
    "DATA COMMANDS": "COMANDOS DE DADOS",
    "DRIVER COMMANDS": "COMANDOS DE DRIVER",
    "MODERATOR COMMANDS": "COMANDOS DE MODERATOR",
    "ADMIN COMMANDS": "COMANDOS DE ADMINISTRATOR",
    "(replace / with ! to broadcast. Broadcasting requires: + % @ # &)": "(substitua / por ! para exibir um comando publicamente. Isso requer: + % @ # &)",
    "<strong>Room punishments</strong>:": "<strong>Puni&ccedil;&otilde;es da sala</strong>",
    "<strong>warn</strong> - Displays a popup with the rules.": "<strong>warn</strong> - Faz uma mensagem com as regras aparecer.",
    "<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.": "<strong>mute</strong> - Silencia um usu&aacute;rio (ou seja, impede-o de falar) por 7 minutos.",
    "<strong>hourmute</strong> - Mutes a user for 60 minutes.": "<strong>hourmute</strong> - Silencia um usu&aacute;rio por 60 minutos.",
    "<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.": "<strong>ban</strong> - Bane um usu&aacute;rio (ou seja, impede-o de entrar na sala) por 2 dias.",
    "<strong>weekban</strong> - Bans a user from the room for a week.": "<strong>weekban</strong> - Bane um usu\xE1rio da sala por uma semana.",
    "<strong>blacklist</strong> - Bans a user for a year.": "<strong>blacklist</strong> - Bane um usu&aacute;rio por um ano.",
    "<strong>Global punishments</strong>:": "<strong>Puni&ccedil;&otilde;es globais</strong>",
    "<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.": "<strong>lock</strong> - Bloqueia um usu&aacute;rio (ou seja, impede-o de falar em quaisquer salas e de mandar mensagens privadas para quem n&atilde;o for staff) por 2 dias.",
    "<strong>weeklock</strong> - Locks a user for a week.": "<strong>weeklock</strong> - Bloqueia um usu&aacute;rio por uma semana.",
    "<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.": "<strong>namelock</strong> - Bloqueia um usu&aacute;rio e o impede de escolher um nome por 2 dias.",
    "<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.": "<strong>globalban</strong> - Bane globalmente um usu&aacute;rio (ou seja, impede-o de se conectar ao servidor e de jogar) por uma semana.",
    "<strong>Indefinite global punishments</strong>:": "<strong>Puni\xE7\xF5es globais de dura\xE7\xE3o indeterminada</strong>:",
    "<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ": "<strong>permalock</strong> - aplicado em m\xFAltiplos casos de m\xE1 conduta e raramente \xE9 resultado de uma \xFAnica a\xE7\xE3o. ",
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>': '\xC9 poss\xEDvel fazer um apelo no <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">f\xF3rum Discipline Appeals</a>',
    " forum after at least 3 months without incident.": " ap\xF3s pelo menos 3 meses sem um incidente.",
    "<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.": "<strong>permaban</strong> - trata-se de um banimento global geralmente aplicado aos casos mais severos de comportamentos ofensivos e/ou inapropriados. N\xE3o \xE9 poss\xEDvel fazer um apelo.",
    "<strong>Room drivers (%)</strong> can use:": "<strong>Room drivers (%)</strong> podem usar:",
    "- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules": "- /warn OU /k <em>nome</em>: d&aacute; um aviso a um usu&aacute;rio e mostra as regras do Pok&eacute;mon Showdown",
    "- /mute OR /m <em>username</em>: 7 minute mute": "- /mute OU /m <em>nome</em>: silencia um usu&aacute;rio por 7 minutos",
    "- /hourmute OR /hm <em>username</em>: 60 minute mute": "- /hourmute OU /hm <em>nome</em>: silencia um usu&aacute;rio por 60 minutos",
    "- /unmute <em>username</em>: unmute": "- /unmute <em>nome</em>: remove o mute de um usu&aacute;rio",
    "- /hidetext <em>username</em>: hide a user's messages from the room": "- /hidetext <em>nome</em>: esconde as mensagens de um usu&aacute;rio na sala",
    "- /announce OR /wall <em>message</em>: make an announcement": "- /announce OU /wall <em>mensagem</em>: faz um an&uacute;ncio",
    "- /modlog <em>username</em>: search the moderator log of the room": "- /modlog <em>nome</em>: faz uma busca do hist&oacute;rico de modera&ccedil;&atilde;o de um determinado usu&aacute;rio",
    "- /modnote <em>note</em>: add a moderator note that can be read through modlog": "- /modnote <em>nota</em>: adiciona uma nota de modera&ccedil;&atilde;o que s&oacute; pode ser lida atrav&eacute;s do modlog",
    "<strong>Room moderators (@)</strong> can also use:": "<strong>Room moderators (@)</strong> tamb&eacute;m podem usar:",
    "- /roomban OR /rb <em>username</em>: ban user from the room": "- /roomban OU /rb <em>nome</em>: bane um usu&aacute;rio da sala",
    "- /roomunban <em>username</em>: unban user from the room": "- /roomunban <em>nome<em>: remove o banimento de um usu&aacute;rio",
    "- /roomvoice <em>username</em>: appoint a room voice": "- /roomvoice <em>nome</em>: promove um usu&aacute;rio ao cargo de room voice",
    "- /roomdevoice <em>username</em>: remove a room voice": "- /roomdevoice <em>nome</em>: remove o cargo de room voice de um usu&aacute;rio",
    "- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room": "- /staffintro <em>introdu&ccedil;&atilde;o</em>: define a introdu&ccedil;&atilde;o do staff que ser&aacute; vis&iacute;vel para todos membros do staff ao entrarem na sala",
    "- /roomsettings: change a variety of room settings, namely modchat": "- /roomsettings: permite modificar uma variedade de configura&ccedil;&otilde;es da sala, notavelmente o modchat",
    "<strong>Room owners (#)</strong> can also use:": "<strong>Room owners (#)</strong> tamb&eacute;m podem usar:",
    "- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room": "- /roomintro <em>introdu&ccedil;&atilde;o</em>: define a introdu&ccedil;&atilde;o da sala que ser&aacute; vis&iacute;vel para todos os usu&aacute;rios ao entrarem na sala",
    "- /rules <em>rules link</em>: set the room rules link seen when using /rules": "- /rules <em>link das regras</em>: define o link das regras da sala ao usar /rules",
    "- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver": "- /roommod, /roomdriver <em>nome</em>: promove um usu&aacute;rio ao cargo de room moderator / driver",
    "- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver": "- /roomdemod, /roomdedriver <em>nome</em>: remove o cargo de room moderator / driver de um usu&aacute;rio",
    "- /roomdeauth <em>username</em>: remove all room auth from a user": "- /roomdeauth <em>nome</em>: remove todos os cargos de um usu&aacute;rio na sala",
    "- /declare <em>message</em>: make a large blue declaration to the room": "- /declare <em>mensagem</em>: faz uma declara&ccedil;&atilde;o &agrave; sala em uma caixa de texto azul e comprida",
    "- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room": "- !htmlbox <em>c&oacute;digo HTML</em>: exibe uma caixa de c&oacute;digo HTML publicamente para a sala",
    "- !showimage <em>[url], [width], [height]</em>: show an image to the room": "- !showimage [url], [largura], [altura]: mostra uma imagem para a sala",
    "- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc": "- /roomsettings: permite modificar uma variedade de configura&ccedil;&otilde;es da sala, incluindo o modchat, filtro de caps lock, etc",
    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>': 'Informa&ccedil;&otilde;es mais detalhadas podem ser encontradas no <a href="https://www.smogon.com/forums/posts/6774654/">guia para roomauth</a>',
    "Tournament Help:": "Ajuda com Torneios:",
    "- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.": "- /tour create </em>formato</em>, elimination - cria um novo torneio em formato de elimina&ccedil;&atilde;o &uacute;nica na sala",
    "- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.": "- /tour create <em>formato</em>, roundrobin - cria um novo torneio em formato round robin na sala",
    "- /tour end: forcibly end the tournament in the current room": "- /tour end: encerra manualmente um torneio na sala",
    "- /tour start: start the tournament in the current room": "- /tour start: inicia o torneio na sala",
    "- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pok&eacute;mon or items from being used in a tournament (it must be created first)": "- /tour banlist: [pokemon], [talent], [...]: Bane moves, abilities, Pok&eacute;mon ou itens de um torneio (o qual deve primeiro ser criado) ",
    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>': 'Informa\xE7\xF5es mais detalhadas podem ser encontradas no <a href="https://www.smogon.com/forums/posts/6777489/">guia de torneios</a>',
    "Your status cannot be updated while you are locked or semilocked.": "Seu status n\xE3o pode ser atualizado enquanto voc\xEA estiver locked ou semilocked.",
    "Your status is too long; it must be under ${maxLength} characters.": "Seu status \xE9 muito longo; ele deve ter menos de ${maxLength} caracteres.",
    "Your status contains a banned word.": "Seu status cont\xE9m uma palavra banida.",
    "Your status has been set to: ${target}.": "Seu status foi definido como: ${target}.",
    "You are now marked as busy.": "Agora voc\xEA est\xE1 marcado como busy (ocupado).",
    "You are now marked as away. Send a message or use /back to indicate you are back.": "Agora voc\xEA est\xE1 marcado como away (distante). Envie uma mensagem ou use /back para indicar que est\xE1 de volta.",
    "You are already marked as back.": "Voc\xEA j\xE1 est\xE1 marcado como back (de volta).",
    "You are no longer marked as busy.": "Voc\xEA n\xE3o est\xE1 mais marcado como busy (ocupado).",
    "You must choose a name before you can talk.": "Voc\xEA deve escolher um nome antes de poder falar.",
    "You are ${lockType} and can't talk in chat. ${lockExpiration}": "Voc\xEA est\xE1 ${lockType} e n\xE3o pode falar em chats. ${lockExpiration}",
    "Get help with [TN: your lock]this": "Pe\xE7a ajuda aqui",
    "You are muted and cannot talk in this room.": "Voc\xEA foi silenciado e n\xE3o pode falar nesta sala.",
    "Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.": "Como o modchat est\xE1 ativado, sua conta deve ter uma semana de registro e voc\xEA deve ter ganho no m\xEDnimo uma partida na ladder para falar nesta sala.",
    "Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.": "Como o modchat est\xE1 ativado, sua conta deve ser staff em uma sala p\xFAblica ou ter um rank global para falar nesta sala.",
    "Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.": "Como o modchat est\xE1 ativado, seu rank deve ser ${groupName} ou maior para falar nesta sala.",
    "Your message can't be blank.": "Sua mensagem n\xE3o pode estar em branco.",
    "Your message is too long: ": "Sua mensagem \xE9 muito longa.",
    "Your message contains banned characters.": "Sua mensagem cont\xE9m caracteres banidos.",
    "This room has slow-chat enabled. You can only talk once every ${time} seconds.": "O slow-chat desta sala est\xE1 ativado. Voc\xEA apenas pode falar a cada ${time} segundos.",
    "Your username contains a phrase banned by this room.": "Seu nome de usu\xE1rio cont\xE9m uma frase banida por esta sala.",
    "Your status message contains a phrase banned by this room.": "A mensagem do seu status cont\xE9m uma frase banida por esta sala.",
    "You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}": "Voc\xEA est\xE1 ${lockType} e s\xF3 pode enviar mensagens privadas para a equipe de modera\xE7\xE3o global. ${lockExpiration}",
    "Get help with this": "Pe\xE7a ajuda com isso",
    'The user "${targetUser.name}" is locked and cannot be PMed.': 'O usu\xE1rio "${targetUser.name}" est\xE1 locked e n\xE3o pode receber mensagens privadas.',
    "On this server, you must be of rank ${groupName} or higher to PM users.": "Neste servidor, voc\xEA precisa ser de cargo ${groupName} ou maior para enviar mensagens privadas.",
    "This user is blocking private messages right now.": "Este usu\xE1rio est\xE1 bloqueando mensagens privadas no momento.",
    "This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.": "Este ${Config.groups[targetUser.group].name} est\xE1 muito ocupado para responder mensagens privadas no momento. Por favor, contate outro membro da staff.",
    'If you need help, try opening a <a href="view-help-request" class="button">help ticket</a>': 'Se voc\xEA precisa de ajuda, tente abrir um <a href="view-help-request" class="button">pedido de ajuda</a>',
    "You are blocking private messages right now.": "Voc\xEA est\xE1 bloquando mensagens privadas no momento.",
    "You are blocking challenges right now.": "Voc\xEA est\xE1 bloqueando desafios no momento.",
    "Your message contained banned words in this room.": "Sua mensagem continha palavras banidas nesta sala.",
    "You can't send the same message again so soon.": "Voc\xEA n\xE3o pode enviar a mesma mensagem de novo t\xE3o cedo.",
    "Due to this room being a high traffic room, your message must contain at least two letters.": "Como esta sala cont\xE9m um grande tr\xE1fego de mensagens, sua mensagem deve conter no m\xEDnimo duas letras.",
    "You are already blocking private messages! To unblock, use /unblockpms": "Voc\xEA j\xE1 est\xE1 bloqueando mensagens privadas! Para desbloque\xE1-las, utilize /unblockpms",
    "You are now blocking private messages, except from staff and ${rank}.": "Agora voc\xEA est\xE1 bloqueando mensagens privadas, exceto de staff e de usu\xE1rios ${rank}.",
    "You are now blocking private messages, except from staff and ${status} users.": "Agora voc\xEA est\xE1 bloqueando mensagens privadas, exceto de staff e de usu\xE1rios ${status}.",
    "You are now blocking private messages, except from staff.": "Agora voc\xEA est\xE1 bloqueando mensagens privadas, exceto de staff.",
    "You are not blocking private messages! To block, use /blockpms": "Voc\xEA n\xE3o est\xE1 bloqueando mensagens privadas! Para bloque\xE1-las, utilize /blockpms",
    "You are no longer blocking private messages.": "Voc\xEA n\xE3o est\xE1 mais bloqueando mensagens privadas.",
    "You are now blocking all incoming challenge requests.": "Agora voc\xEA est\xE1 bloqueando todos os pedidos de desafio.",
    "You are already blocking challenges!": "Voc\xEA j\xE1 est\xE1 bloqueando desafios",
    "You are already available for challenges!": "Voc\xEA j\xE1 est\xE1 dispon\xEDvel para desafios!",
    "You are available for challenges from now on.": "Voc\xEA est\xE1 dispon\xEDvel para desafios a partir de agora.",
    "You are now blocking challenges, except from staff and ${rank}.": "Voc\xEA est\xE1 bloqueando desafios no momento, exceto de adminstradores e ${rank}.",
    "You are now blocking challenges, except from staff and ${status} users.": "Voc\xEA est\xE1 bloqueando desafios no momento, exceto de adminstradores e usu\xE1rios ${status}.",
    "Staff FAQ": "Perguntas Frequentes sobre Staff",
    "You cannot broadcast all FAQs at once.": "Voc\xEA n\xE3o pode exibir publicamente todos os FAQs (Perguntas Frequentes) de uma vez.",
    "A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.": "Um usu\xE1rio \xE9 verificado ap\xF3s ganhar pelo menos uma partida ranqueada e ter uma semana ou mais de registro. A fim de prevenir spam e troll, a maior parte das salas de bate-papo s\xF3 permitem que usu\xE1rios verificados conversem. Se voc\xEA n\xE3o for verificado, pode educadamente enviar uma mensagem privada a um membro do staff (os quais t\xEAm os s\xEDmbolos %, @ ou # na frente do nome) da sala em que voc\xEA quer conversar e pedir para o modchat ser desativado. Por\xE9m, eles n\xE3o s\xE3o obrigados a desativar o modchat.",
    "How the ladder works": "Como a ladder funciona",
    "Tiering FAQ": "Perguntas Frequentes sobre Tiering",
    "Badge FAQ": "Perguntas Frequentes sobre Badges",
    "Common misconceptions about our RNG": "Concep\xE7\xF5es erradas e comuns sobre nosso RNG",
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).": "Para entrar em um torneio de sala, clique no bot\xE3o <strong>Join!</strong> ou digite o comando <code>/tour join</code> no chat da sala. Voc\xEA pode checar se sua equipe \xE9 v\xE1lida para o torneio clicando no bot\xE3o <strong>Validate</strong> uma vez que voc\xEA tenha entrado e selecionado um time. Para batalhar contra um oponente no torneio, clique no bot\xE3o <strong>Ready!</strong> quando ele aparecer. Existem tipos diferentes de torneios de sala: elimina\xE7\xE3o (se um usu\xE1rio perder mais do que um certo n\xFAmero de vezes estar\xE1 eliminado) e round robin (todos jogam entre si, com o usu\xE1rio com mais pontos sendo o vencedor).",
    "Frequently Asked Questions": "Perguntas Frequentes",
    "pages/faq": "pages/faq",
    "pages/ladderhelp": "pages/ladderhelp",
    "pages/rng": "pages/rng",
    "pages/staff": "pages/staff",
    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.": "- N\xF3s registramos PMs (Mensagens Privadas) para que voc\xEA possa denunci\xE1-los - a equipe n\xE3o pode olhar para eles sem permiss\xE3o, a menos que haja um motivo de aplica\xE7\xE3o da lei.",
    "- We log IPs to enforce bans and mutes.": "- N\xF3s registramos IPs para realizar banimentos e silenciamentos.",
    "- We use cookies to save your login info and teams, and for Google Analytics and AdSense.": "- Usamos cookies para salvar suas informa\xE7\xF5es de login e equipes, e para Google Analytics e AdSense.",
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>': '- Para mais informa\xE7\xF5es, voc\xEA pode ler nossa <a href="https://${Config.routes.root}/privacy">pol\xEDtica de privacidade completa.</a>'
  }
};
//# sourceMappingURL=main.js.map
