# Structure d'une page web
`<!DOCTYPE html>` : Permet de déclarer aux navigateurs que le document est un document HTML5

`<html>`:  C'est l'élément racine de tout document HTML. Il contient tous les éléments de la page.

`lang="en"`: Définit la langue principale du document.Cela aide les moteurs de recherche à déterminer la langue de la page.

`<head>`: Contient les informations relatives au document telles que les métadonnées, les liens vers les feuilles de style, les scripts, etc.

`<title>`: C'est le titre de la page, qui est affiché dans la barre du navigateur.

`<body>`: Contient le contenu de la page(le texte,les medisas, etc.)

`<link>`: Permet de lier une ressourse externe à un document HTML.Par exemple la feuille de style, des polices(fonts)issues de Google Fonts ou autres.

## Les balises `<meta>`

Le tag `<meta>` est utilisé pour définir des métadonnées sur le document HTML. Il peut contenir des informations telles que la langue, la date de création, les autorités, etc.

1. `<meta charset="UTF-8">`: Permet de définir le jeu de caractères utilisé dans le document. Dans ce cas, il s'agit du jeu de caractères Unicode UTF-8.

` <meta name="viewport" content="width=device-width, initial-scale=1.0">` : Cette balise permet de définir les paramètres de rendu du document sur les appareils(tablettes,mobiles,desktop). Elle spécifie le mode de rendu par défaut, la largeur de la fenêtre et la mise à l'échelle.Ce qui est essentiel pour créer des sites web responsive(adaptatifs aux différents appareils).

`<meta name="description" content="Apprenez les bases du HTML et du CSS pour créer des sites web responsive">` : cette balise permet de fournir une description précise du contenu de la page .

`  <meta name="'keywords'" content="HTML, CSS, responsive, design">`: Définit les mots clés associés à la page.

`  <meta name="author" content="John Doe">` : Permet de définir l'auteur de la page.

`  <meta name="robots" content="index, follow">`: Indique aux robots des moteurs de recherche s'ils doivent indexer la page ou pas. ` index,follow` pour dire que la page peut être indexée et suivie par les moteurs de recherche. `noindex,nofollow` pour dire que la page ne peut être indexée ni suivie par les moteurs de recherche.

`  <meta name="revisit-after" content="7 days">` : Permet de définir le temps que les moteurs de recherche doivent attendre avant de ré-indexer la page.Ceci n'est plus obligatoire avec les dernières mises à jour de Google.


## les attributs propery

Les meta `OG (Open graph)` sont utilisés pour définir des informations sur les pages web lors des partages sur les réseaux sociaux. Ils sont principalement utilisés pour les réseaux sociaux comme Facebook, Twitter, LinkedIn, etc.

`    <meta property="og:url" content="https://www.mon-site.com">` : Permet de définir l'URL de la page.

`    <meta property="og:type" content="website">` : Permet de définir le type de contenu de la page.

`    <meta property="og:image" content="chemin/vers/image.jpg">` : Permet de définir l'image de la page lors des partages sur les réseaux sociaux.
