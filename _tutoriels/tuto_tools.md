---
layout: tutorial
title: "Outils utiles"
icon: " 🧰"
order: 6
status: in_progress
excerpt: "Quelques outils utiles et indispensables pour se protéger et réagir aux fuites !"
---

## Détecter une fuite de mot de passe

> ℹ️ **Info utile**
> 
> Ce site référence les adresses mail présentes dans les futies de données (comme l'**ANTS**, **ZARA** ou encore **Leclerc**). Ainsi, [Have I Been PWNED](haveibeenpwned.com) permet de savoir si notre mot de passe a potentiellement fuité et de prendre les mesures nécessaires pour **assurer la protection** de nos comptes et de nos données.

1. Rendez-vous sur le site officiel [haveibeenpwned.com](haveibeenpwned.com)
2. Renseignez l'adresse mail que vous souhaitez tester, puis cliquez sur "**Check**"
3. Le site affiche désormais si votre adresse mail est **présent**e dans une fuite de données

![Capture : Have I Been PWND]({{ '/assets/images/hibp.jpg' | relative_url }})

---

## Tester la réputation d'une URL ou d'un fichier

Avant d'aller sur un site qui semble **trop beau pour être vrai**, ou avant de cliquer sur un lien envoyé par un proche **sans plus de contexte**, il est préférable de *tester* si ce que l'on s'apprête à cliquer ne représente pas **un danger**.

> ⚠️ **Attention** : Beaucoup pensent que le "cadenas" 🔒 sur les navigateurs et le HTTPS vous protègent.
> 
> **C'est faux.** HTTPS c'est **uniquement** la sécurité entre vous et le site internet avec lequel vous intéragissez.
> 
> Si un site est **malveillant**, peu importe si la communication avec ce dernier est sécurisée, le problème est **le site internet en lui-même** !

<br>

1. Rendez-vous sur le site officiel [virustotal.com](virustotal.com)
2. Sélectionnez "**URL**" (entre "**FILE**" et "**SEARCH**")
3. Renseignez le lien suspect ou le site internet sur lequel vous avez un doute et appuyez sur Entrée
4. [Virustotal](virustotal.com) fait l'analyse et vous affiche le résultat. Si le résultat est **au moins de 1** (affiché en rouge 🔴), alors c'est qu'il y a un **risque réel**.

<br>

> ✅ Le site Virustotal propose également un service pour **analyser des fichiers** (comme un PDF ou un .exe), exactement comme un antivirus, ce qui peut être pratique avant d'installer un **logiciel qui semble fiable** mais sur lequel on a **un doute**. L'analyse repose sur un grand nombre d'antivirus du marché 👾, et offre donc une plus grande chance d'identifier un **logiciel malveillant**.
>
> Tout comme pour les **URL**, si le résultat est positif (rouge 🔴), alors c'est que le logiciel est **très probablement malveillant**

![Capture : VirusTotal]({{ '/assets/images/vt.png' | relative_url }})