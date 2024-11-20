# Guide d'installation de Git et connexion à GitHub

## 1. Installation de Git

- Téléchargez Git depuis le site officiel : https://git-scm.com/downloads
- Choisissez la version correspondant à votre système d'exploitation.
- Lancez l'installeur et suivez les instructions (les options par défaut conviennent généralement).

## 2. Configuration de Git

Ouvrez un terminal et exécutez ces commandes :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"
```

- Pour véfier que cela fonctionne, exécutez la commande suivante :
```bash
git config --global --list
```

## 3. Création d'un compte GitHub

- Allez sur https://github.com/.
- Cliquez sur "Sign up" et suivez les étapes d'inscription.

## 4. Génération d'une clé SSH (Optionnel mais recommandé)

- Ouvrez un terminal.
- Générez une nouvelle clé SSH :
  ```bash
  ssh-keygen -t ed25519 -C "votre.email@exemple.com"
  ```
- Suivez les instructions (appuyez sur Entrée pour accepter l'emplacement par défaut).
- Ajoutez la clé à l'agent SSH :
  ```bash
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
  ```

## 5. Ajout de la clé SSH à GitHub(Optionnel mais recommandé)

- Copiez le contenu de votre clé publique :
  ```bash
  cat ~/.ssh/id_ed25519.pub
  ```
- Sur GitHub, allez dans **Settings > SSH and GPG keys**.
- Cliquez sur "New SSH key".
- Collez votre clé et donnez-lui un nom.

## 6. Préparation de votre projet local

- Créez un dossier pour votre projet (si ce n'est pas déjà fait).
- Ouvrez un terminal dans ce dossier.
- Initialisez un dépôt Git :
  ```bash
  git init
  ```
- Ajoutez vos fichiers :
  ```bash
  git add .
  ```
- Faites votre premier commit :
  ```bash
  git commit -m "Initial commit"
  ```

## 7. Création d'un nouveau dépôt sur GitHub

- Sur GitHub, cliquez sur le bouton "+" en haut à droite, puis "New repository".
- Donnez un nom à votre dépôt.
- Ne cochez pas "Initialize this repository with a README".
- Cliquez sur "Create repository".

## 8. Connexion de votre dépôt local à GitHub

 **METHODE 1 :**
- Copiez l'URL SSH de votre dépôt GitHub.
- Dans votre terminal local, exécutez :
  ```bash
  git remote add origin git@github.com:votre-nom-utilisateur/nom-du-depot.git
  git branch -M main
  git push -u origin main
  ```
  **METHODE 2 :**
  - Suivez les étapes qui s'affichent dans votre page après la création de votre dépôt sur GitHub.Github vous donne toutes les commandes à faire.

Votre projet est maintenant sur GitHub !

## Mises à jour de votre projet

### Étapes pour envoyer des mises à jour vers GitHub

1. **Vérifier l'état de votre dépôt local :**
   ```bash
   git status
   ```

2. **Ajouter les modifications au staging :**
   Pour ajouter tous les fichiers modifiés :
   ```bash
   git add .
   ```
   Ou pour ajouter des fichiers spécifiques :
   ```bash
   git add nom_du_fichier.ext
   ```

3. **Créer un commit :**
   ```bash
   git commit -m "Description concise des modifications"
   ```

4. **Pousser les modifications vers GitHub :**
   ```bash
   git push origin main
   ```
   Si vous travaillez sur une branche différente, remplacez "main" par le nom de votre branche.

5. **Gérer les conflits (si nécessaire) :**
   Si des modifications ont été apportées sur GitHub que vous n'avez pas localement, récupérez-les d'abord :
   ```bash
   git pull origin main
   ```
   Résolvez les conflits s'il y en a, puis recommencez le processus à partir de l'étape 2.

### Bonnes pratiques

- Faites des commits fréquents avec des messages descriptifs.
- Tirez (pull) régulièrement les changements du dépôt distant pour rester à jour.
- Utilisez des branches pour développer de nouvelles fonctionnalités.
- Vérifiez toujours l'état de votre dépôt avec `git status` avant de faire des opérations importantes.

