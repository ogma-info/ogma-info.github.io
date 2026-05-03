---
layout: default
title: "Attention au Phishing : Ne mordez pas à l'hameçon ! 🎣"
---

# 🎣 Attention au Phishing : Ne mordez pas à l'hameçon !

Le "Phishing" (ou hameçonnage) est la technique préférée des cybercriminels pour voler vos informations. Pas besoin d'être un génie de l'informatique pour vous piéger : ils utilisent simplement la ruse et la peur.

### 📊 Le phishing en quelques chiffres
* **90%** des cyberattaques réussies commencent par un simple e-mail frauduleux.
* Plus de **3 milliards** d'e-mails de phishing sont envoyés chaque jour dans le monde.
* En France, près de **la moitié des internautes** ont déjà été confrontés à une tentative de vol de données.

---

## 🧐 C'est quoi, concrètement ?

C'est un message (Email, SMS ou même appel téléphonique) qui se fait passer pour un organisme de confiance (votre banque, les impôts, Netflix, ou même un proche) pour vous demander de cliquer sur un lien ou de donner un code.

### 🚩 Les exemples les plus fréquents :
* **Le faux colis :** "Votre livraison est suspendue, payez 1,99€ de frais de port pour débloquer le colis." 📦
* **L'amende impayée :** "Dernier rappel avant majoration : payez votre amende sur ce lien." 🚔
* **L'alerte bancaire :** "Une connexion suspecte a été détectée, connectez-vous vite pour bloquer votre carte." 💳

---

## 🛡️ 3 Clés pour ne jamais se faire avoir

1.  **L'Urgence est votre ennemie :** Si le message vous presse de faire quelque chose "tout de suite" ou "sous 24h", c'est presque toujours une arnaque. **Respirez, attendez 5 minutes.**
2.  **Vérifiez l'expéditeur :** Regardez l'adresse mail. Une banque ne vous écrira jamais avec une adresse finit par `@gmail.com` ou `@outlook.fr`.
3.  **Ne cliquez jamais sur le lien :** Si vous avez un doute sur un message de votre banque, fermez le mail, ouvrez votre navigateur et tapez vous-même l'adresse du site de votre banque.

---

## 🔐 Le Coffre-fort : Votre garde du corps automatique

L'un des plus grands avantages d'utiliser un outil comme **Bitwarden**, c'est qu'il est "insensible" au phishing.

**Pourquoi ?** Parce que Bitwarden enregistre l'adresse précise du site (ex: `https://www.ma-banque.fr`). 
* Si vous cliquez par erreur sur un lien frauduleux qui ressemble au vrai site (ex: `https://www.ma-banq-ue.fr`), **Bitwarden refusera de remplir votre mot de passe** car il verra que l'adresse n'est pas la bonne. 

C'est une protection visuelle instantanée : **Si Bitwarden ne propose rien, c'est un piège !** ⛔

---

## 🧠 Testez vos réflexes (Le Petit Quiz)

Cliquez sur les questions pour afficher la réponse.

<details>
  <summary><b>1. Vous recevez un SMS disant que vous avez un remboursement d'impôts en attente. Que faites-vous ?</b></summary>
  <p style="color: var(--accent-green); padding-left: 20px;">
    ✅ <b>Réponse :</b> Vous ne cliquez pas. Les impôts ne demandent jamais de coordonnées bancaires par SMS. Connectez-vous directement sur le site officiel <i>impots.gouv.fr</i>.
  </p>
</details>

<br>

<details>
  <summary><b>2. Un email de "Netflix" vous dit que votre abonnement est expiré. L'adresse de l'envoyeur est "netflix-support@hotmail.com". Est-ce suspect ?</b></summary>
  <p style="color: var(--accent-green); padding-left: 20px;">
    ✅ <b>Réponse :</b> Oui, totalement ! Netflix possède son propre nom de domaine (@netflix.com). Une adresse @hotmail ou @gmail est le signe d'un pirate.
  </p>
</details>

<br>

<details>
  <summary><b>3. Vous êtes sur un site et Bitwarden ne vous propose pas de remplir votre mot de passe habituel. Quel est votre premier réflexe ?</b></summary>
  <p style="color: var(--accent-green); padding-left: 20px;">
    ✅ <b>Réponse :</b> Vous vérifiez l'URL (l'adresse en haut). Si Bitwarden ne reconnaît pas le site, c'est probablement que vous êtes sur une copie frauduleuse !
  </p>
</details>

---

<style>
/* Style pour les dropdowns (accordions) */
details {
  background: var(--sidebar-bg);
  border: 1px solid var(--primary-green);
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

details[open] {
  border-color: var(--accent-green);
}

summary {
  font-weight: bold;
  color: var(--text-color);
  list-style: none;
}

summary::before {
  content: "➕ ";
}

details[open] summary::before {
  content: "➖ ";
}

details p {
  margin-top: 15px;
  border-top: 1px solid #23863655;
  padding-top: 10px;
}
</style>