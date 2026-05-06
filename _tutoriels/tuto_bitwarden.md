---
layout: tutorial
title: "Mots de passe (Bitwarden)"
icon: "🪎"
order: 1
status: available
excerpt: "Apprends à utiliser le meilleur gestionnaire de mots de passe open-source pour sécuriser tous tes comptes."
---

## 🤔 Pourquoi un coffre-fort de mots de passe est-il INDISPENSABLE ?

À l'ère du numérique, la sécurité n'est plus une option. Voici pourquoi vous en avez besoin :

1.  **🧠 Libération mentale :** Vous n'avez plus qu'un seul mot de passe à retenir (le "Maître"). Bitwarden retient les centaines d'autres pour vous.
2.  **🛡️ Protection contre le piratage :** En utilisant un mot de passe unique et complexe pour chaque site (ex: `p9@$L!k92z`), si un site est piraté, vos autres comptes restent en sécurité.
3.  **🚫 [Anti-Phishing](/tutoriels/tuto_phishing/) :** Bitwarden ne remplira vos identifiants que sur le site officiel enregistré. Si vous êtes sur un faux site, il ne proposera rien !
4.  **📱 Synchronisation totale :** Accédez à vos secrets sur votre PC, votre iPhone, votre Android ou votre tablette instantanément.

---

## 🆕 Étape 1 : Créer son compte Bitwarden 🌐

La première étape consiste à créer votre compte (gratuitement) directement sur le site officiel :

1. Rendez-vous sur la page officielle : [bitwarden.com/go/start-free/](https://bitwarden.com/go/start-free/)
2. Renseignez votre adresse e-mail.
3. Vous recevrez un email intitulé "Verify Your Email", après l'avoir ouvert, cliquez sur le bouton **Verify Email**. Vous serez redirigé vers la création de votre mot de passe de coffre fort.
3. **Attention :** Choisissez un **Mot de passe Maître** fort. C'est le **SEUL** mot de passe que vous devrez mémoriser ! (Par exemple, une phrase longue comme "MonChatAimeLesPizzas!42"). Ne l'oubliez surtout pas, personne ne pourra le récupérer pour vous.
4. Validez la création de votre compte.

> **ℹ️ Info : Gratuit ou Payant ?**
> La version **gratuite** de Bitwarden est **suffisante pour 99% des usages** (mots de passe illimités, appareils illimités, synchronisation sécurisée). 
> La version **Premium** (environ 10€/an) ajoute des fonctionnalités optionnelles : le stockage de fichiers chiffrés (1 Go), l'authentificateur intégré (TOTP) pour la double authentification, un accès d'urgence, et des rapports de sécurité avancés.

---

## 📥 Étape 2 : Installation de **Bitwarden** 🛠️

Bitwarden est polyvalent. Voici comment l'installer sur tous vos supports :

### 🌐 1. L'Extension **navigateur** et sur **PC**
*   **Extension :** [Chrome Web Store](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb) / [Firefox](https://addons.mozilla.org/fr/firefox/addon/bitwarden-password-manager/). **Épinglez l'icône** 🛡️.
*   **Windows :** Téléchargez l'application sur [bitwarden.com/download](https://bitwarden.com/download/). Suivez "Suivant, Terminer". Facile ! 🎈

### 📱 2. L'Application Mobile (Android & iPhone)
C'est indispensable pour se connecter à vos applis (Instagram, Banque, etc.).
*   **Android :** [Google Play Store](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden) 🤖
*   **iPhone / iPad :** [Apple App Store](https://apps.apple.com/fr/app/bitwarden-password-manager/id1137397744) 🍎
*   **Configuration :** Une fois installée, allez dans les **Paramètres du téléphone > Remplissage automatique** et sélectionnez **Bitwarden** pour que le téléphone vous propose vos mots de passe dans toutes vos apps !

---

## ✨ Étape 3 : Créer un nouveau secret (identifiant) 📝

Lorsque vous vous inscrivez sur un nouveau site ou une app (consultez aussi la [documentation officielle](https://bitwarden.com/fr-fr/help/getting-started-browserext/)) :

1.  Ouvrez Bitwarden 🛡️ et cliquez sur le bouton **"+"** (Ajouter un élément).
2.  **Nom :** Donnez un nom (ex: "Amazon").
3.  **Identifiant :** Votre email ou pseudo.
4.  **Mot de passe :** Utilisez le **Générateur (🔄)** pour créer un code indéchiffrable.
5.  **📍 L'Auto-complétion de l'URL :**
    *   **Sur Web :** Si l'extension est ouverte sur la page, elle remplit l'URL toute seule !
    *   **Sur Mobile :** Bitwarden détecte souvent l'application ouverte (ex: l'app Disney+) et lie automatiquement le secret à cette application. 🎯

> **💡 Conseil d'expert :** Un mot de passe robuste est toujours complexe et dans l'idéal constitué d'au moins 16 caractères aléatoires, de chiffres, de lettres majuscules et minuscules, et de caractères spéciaux.

![Capture : Création d'un élément Bitwarden]({{ '/assets/images/bw_step2.jpg' | relative_url }})
*Interface de création d'un secret.*

---

## 🔑 Étape 4 : Se connecter (Utiliser un secret existant) ⚡

### 💻 Sur Ordinateur :
1.  **L'indicateur :** Un chiffre (ex: "1" ou "2") s'affiche sur l'icône 🛡️.
2.  **Raccourci Ninja :** `Ctrl + Shift + L` remplit tout d'un coup ! 🔥

### 📱 Sur Mobile (Android & iPhone) :
1.  Ouvrez votre application (ex: Instagram).
2.  Cliquez sur le champ "Mot de passe".
3.  **La bulle magique :** Une suggestion "Bitwarden" ou "Mots de passe" apparaît juste au-dessus du clavier ou dans une info-bulle. 🫧
4.  **Biométrie :** Posez votre doigt (Empreinte) ou montrez votre visage (FaceID/Face Unlock). Le champ se remplit tout seul ! 🧬

![Capture : Remplissage Bitwarden]({{ '/assets/images/bw_step3.jpg' | relative_url }})
*Exemple de suggestion de remplissage sur navigateur.*

---

## ✅ Quelques conseils d'expert 💎

*   **⚡ Rapidité :** Activez le déverrouillage biométrique (Empreinte/Visage) pour ne jamais avoir à taper votre long mot de passe maître sur mobile.
*   **🛡️ Double Sécurité :** [Activez le 2FA](/tutoriels/tuto_2fa/). Même si quelqu'un trouve votre mot de passe maître, il ne pourra pas entrer sans votre téléphone !

Vous êtes désormais protégé sur TOUS vos écrans ! 🌍🌐
