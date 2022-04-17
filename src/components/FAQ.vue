<template>
  <v-expansion-panels
    v-model="expanded"
    :focusable="fromRoute"
    @click="fromRoute = false"
  >
    <v-expansion-panel class="kontro">
      <v-expansion-panel-header>
        Was ist Kontro?
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Kontro ist Projekt das Menschen helfen soll, sich tßicketfrei im
        öffentlichen Nahverkehr zu bewegen. Anfangs ist Kontro auf folgenden
        Platformen vertreten
        <v-btn block @click="openUrl('https://t.me/KontroBot')">
          Telegram
          <v-icon>mdi-telegram</v-icon>
        </v-btn>
        <v-btn block @click="openUrl('https://twitter.com/BotKontro')">
          twitter
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn block @click="openUrl('http://kontro.info/')">
          kontro.info
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel class="wie">
      <v-expansion-panel-header>
        Wie funktioniert Kontro?
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Jedes mal wenn über Telegram eine Kontrolle gemeldet wird, wird sie auf
        Twitter, der Lokalen Freifahren-Gruppe und dieser Website
        veröffentlicht. Zusätzlich wird die Kontrolle in einer Datenbank
        gespeichert um Statistiken über das Kontroll verhalten zu erstellen.
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel class="ticket">
      <v-expansion-panel-header>
        Warum kauft ihr euch nicht einfach ein Ticket?
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Nicht jeder Mensch besitzt das Privileg sich ein ticket leisten zu
        können.
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel class="ticket">
    <v-expansion-panel-header>

    </v-expansion-panel-header>
    <v-expansion-panel-content>

    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  data: function() {
    return {
      fromRoute: false,
      expanded: null,
      qas: [
        {
          n: "kontro",
          q: "Was ist Kontro?",
          a:
            '"Kontro" ist ein Projekt das Menschen helfen soll sich gegenseitig vor Kontrollen zu waren und sich so solidarisch den Menschen gegen über zu zeigen die sich kein Ticket leisten können'
        },
        {
          n: "melden",
          q: "Wie kann ich eine Kontrolle melden?",
          a:
            "Aktuell geht es nur über den KontroBot den findest du in Telegram unter dem Benutzernamen @KontroBot"
        },
        {
          n: "wertfrei",
          q: "was ist mit einer wertfreien Sprache gemeint?",
          a: ""
        },
        {
          n: "wertfrei_wichtig",
          q: "warum ist eine Wertfrei Sprache wichtig?",
          a: ""
        },
        {
          n: "uncool",
          q:
            "Was kann ich tuen wenn ich eine Diskrimminierende Beschreibung entdeckt habe?",
          a: ""
        }
      ]
    };
  },
  created: function() {
    this.expand();
  },
  methods: {
    openUrl: function(url) {
      window.open(url);
    },
    expand: function() {
      for (let i = 0; i < this.qas.length; i++) {
        if (this.$route.params.question !== undefined) {
          if (this.qas[i].n === this.$route.params.question.toLowerCase()) {
            this.expanded = i;
            this.fromRoute = true;
            return;
          }
        }
      }
    }
  }
};
</script>
