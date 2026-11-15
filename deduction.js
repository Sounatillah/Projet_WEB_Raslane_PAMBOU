
/* ==========================================
   THE LAST MESSAGE — PAGE DÉDUCTION
   ========================================== */

// 1. Récupération des éléments HTML

const formulaire = document.querySelector(".deduction-form");
const boutonVerdict = document.querySelector("#bouton-verdict");
const resultat = document.querySelector("#resultat-deduction");

const boutonRevelation = document.querySelector("#bouton-revelation");
const revelationFinale = document.querySelector("#revelation-finale");


// 2. Vérification du formulaire
// Le bouton est activé uniquement si tous les champs
// obligatoires sont remplis.

function verifierFormulaire() {
    boutonVerdict.disabled = !formulaire.checkValidity();
}

formulaire.addEventListener("input", verifierFormulaire);
formulaire.addEventListener("change", verifierFormulaire);

// Vérification dès le chargement de la page
verifierFormulaire();


// 3. Lancement de l'analyse
// Quand le visiteur clique, un message de chargement
// apparaît pendant 1,4 seconde.

boutonVerdict.addEventListener("click", () => {

    if (!formulaire.reportValidity()) {
        return;
    }

    boutonVerdict.disabled = true;
    boutonVerdict.textContent = "Analyse des pièces…";

    // On masque l'ancienne révélation si le visiteur recommence
    boutonRevelation.hidden = true;
    revelationFinale.hidden = true;

    resultat.hidden = false;
    resultat.className = "result-panel verdict-loading";

    resultat.innerHTML = `
        <p class="verdict-kicker">
            DOSSIER N°017 · ANALYSE EN COURS
        </p>
        <p class="verdict-loading__texte">
            Les pièces sont recoupées…
        </p>
    `;

    // Attend 1400 millisecondes avant d'afficher le verdict
    window.setTimeout(afficherVerdict, 1400);
});


// 4. Analyse des réponses du visiteur

function afficherVerdict() {

    // On récupère les choix du formulaire
    const hypothese = document.querySelector("#hypothese").value;
    const piece = document.querySelector("#piece-decisive").value;
    const suspect = document.querySelector("#suspect-choisi").value;

    // Vérifie si le visiteur a choisi la piste du départ
    const bonnePiste = hypothese === "depart";

    // Vérifie si la preuve sélectionnée est pertinente
    const pieceCle = ["preuve-02", "preuve-03", "preuve-06"].includes(piece);


    // 5. Analyse personnalisée du suspect choisi

    let analyseSuspect = "";

    if (suspect === "nora") {

        analyseSuspect = `
            Nora connaissait les recherches d'Élise et semble
            avoir dissimulé certaines informations.
            Son silence mérite d'être examiné.
        `;

    } else if (suspect === "marc") {

        analyseSuspect = `
            Marc avait accès aux archives confidentielles.
            Les modifications du dossier 17 rendent
            son implication particulièrement suspecte.
        `;

    } else if (suspect === "thomas") {

        analyseSuspect = `
            Thomas affirme ne pas avoir rencontré Élise,
            mais un témoignage contredit sa déclaration.
            Cela ne prouve cependant pas sa responsabilité.
        `;

    } else if (suspect === "sarah") {

        analyseSuspect = `
            Sarah connaissait les recherches d'Élise.
            Certaines zones d'ombre subsistent,
            mais les éléments disponibles ne permettent
            pas de l'accuser.
        `;
    }


    // 6. Choix de l'apparence du verdict

    resultat.className = bonnePiste
        ? "result-panel verdict-revealed verdict-revealed--juste"
        : "result-panel verdict-revealed verdict-revealed--indice";


    // 7. Affichage du verdict selon les réponses

    if (bonnePiste && pieceCle) {

        // Bonne hypothèse avec une preuve pertinente
        resultat.innerHTML = `
            <p class="verdict-kicker">
                DOSSIER N°017 · SCELLÉS LEVÉS
            </p>

            <h2>Élise avait préparé son départ.</h2>

            <p>
                La caméra retarde de neuf minutes :
                l'heure enregistrée ne suffit donc pas
                à établir l'heure réelle.

                Le billet de bus renforce la piste
                d'un départ organisé.

                Le message d'Élise et le déplacement
                du dossier 17-B suggèrent qu'elle
                avait découvert quelque chose.
            </p>

            <p class="verdict-final">
                Mais les preuves ne permettent pas encore
                d'identifier avec certitude la personne
                qui a déplacé le dossier.
            </p>
        `;

    } else if (bonnePiste) {

        // Bonne hypothèse, mais preuve moins convaincante
        resultat.innerHTML = `
            <p class="verdict-kicker">
                DOSSIER N°017 · PISTE PLAUSIBLE
            </p>

            <h2>Votre hypothèse tient.</h2>

            <p>
                Le billet et la note suggèrent qu'Élise
                avait préparé son départ.

                Pour renforcer votre déduction,
                recoupez cette pièce avec le retard
                de la caméra et la silhouette
                près de la sortie de service.
            </p>
        `;

    } else {

        // Hypothèse qui ne correspond pas aux indices principaux
        resultat.innerHTML = `
            <p class="verdict-kicker">
                DOSSIER N°017 · CONTRADICTION DÉTECTÉE
            </p>

            <h2>Un détail ne colle pas.</h2>

            <p>
                Le retard de la caméra change l'ordre
                apparent des événements.

                Le billet de bus suggère également
                un départ préparé.

                Reprenez ces pièces avant de conclure.
            </p>
        `;
    }


    // 8. Ajout de l'analyse du suspect sous le verdict

    resultat.innerHTML += `
        <h3>Analyse du suspect sélectionné</h3>
        <p>${analyseSuspect}</p>
    `;


    // 9. Réactivation du bouton et affichage de la révélation

    boutonVerdict.disabled = false;
    boutonVerdict.textContent = "Réexaminer ma déduction";

    boutonRevelation.hidden = false;
    revelationFinale.hidden = true;

    resultat.focus();
}


// 10. Révélation finale de l'enquête
// Cette partie s'exécute seulement lorsque le visiteur
// clique sur le bouton "Révéler la vérité".

boutonRevelation.addEventListener("click", () => {

    revelationFinale.hidden = false;

    revelationFinale.innerHTML = `
        <p class="verdict-kicker">
            DOSSIER N°017 · VÉRITÉ RÉVÉLÉE
        </p>

        <h2>Élise Moreau est vivante.</h2>

        <p>
            Élise n'a pas été enlevée.

            Après avoir découvert des irrégularités
            dans le dossier 17, elle a organisé
            sa propre disparition pour protéger
            les preuves.
        </p>

        <h3>Le rôle de Marc Delcourt</h3>

        <p>
            Marc avait manipulé des documents
            confidentiels pour dissimuler
            certaines informations.

            Les anomalies dans les archives
            étaient liées à ses interventions.
        </p>

        <h3>Le secret de Nora Benali</h3>

        <p>
            Nora connaissait le projet d'Élise.

            Elle l'a aidée à disparaître temporairement
            et a gardé le silence pour la protéger.
        </p>

        <h3>Et les autres suspects ?</h3>

        <p>
            Thomas Leroy et Sarah Morel avaient éveillé
            des soupçons, mais ils n'étaient pas
            responsables de cette disparition.
        </p>

        <p class="verdict-final">
            Le dernier message d'Élise n'était pas un adieu.
            C'était une invitation à découvrir la vérité.
        </p>
    `;

    // On masque le bouton après la révélation
    boutonRevelation.hidden = true;

    // Défilement automatique vers la conclusion
    revelationFinale.scrollIntoView({
        behavior: "smooth"
    });
});
