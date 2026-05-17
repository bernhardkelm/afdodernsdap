<script setup lang="ts">
// Components
import TextPageWrapper from '@/components/TextPageWrapper.vue';
import SourceCollection from '@/components/sources/SourceCollection.vue';
</script>

<template>
  <TextPageWrapper>
    <h1>Verwendung von Quellen.</h1>

    <section>
      <p>
        Alle Zitate der AfD stammen von amtierenden Parteimitgliedern und wurden aus öffentlich
        zugänglichen Quellen wie Reden, Interviews oder Social-Media-Beiträgen zusammengestellt.
      </p>
      <p>
        Alle Zitate der NSDAP-Mitglieder stammen aus öffentlich zugänglichen Quellen wie Biografien,
        Tagebüchern, Protokollen von Reden oder aus Gastbeiträgen in Zeitungen.
      </p>
      <p>
        Wir haben uns bewusst dafür entschieden, die Zitate in ihrer ursprünglichen Form und voller
        Härte wiederzugeben, ohne Wörter zu zensieren – selbst wenn sie diskriminierende Sprache
        enthalten. Dadurch soll ermöglicht werden, das Gesagte in seiner gesamten Tragweite zu
        erfassen und einzuordnen.
      </p>
      <p>
        Die Zitate auf der ersten Fragenkachel wurden jeweils an die heutige Rechtschreibung
        angepasst, um Rückschlüsse auf die Zuordnung anhand der Schreibweise zu vermeiden. Auf der
        Auflösungskachel ist das Zitat stets in seiner ursprünglichen Schreibweise zu finden. <br />
        Teilweise sind die Zitate auf den Lösungskacheln zudem erweitert, um mehr Kontext des
        Gesagten zu bieten.
      </p>
      <p>
        Anmerkungen und Hinweise zu den Quellen können an
        <a class="link" href="mailto:hallo@afdodernsdap.de">hallo@afdodernsdap.de</a> gemeldet
        werden.
      </p>
    </section>
    <section>
      <h2 id="changes">Änderungen und Ergänzungen.</h2>
      <p>
        Änderungen an den Quellen seit der Veröffentlichung am 30.01.2025 werden hier
        nachvollziehbar dokumentiert:
      </p>
      <ul>
        <li>
          <b>17.05.2026 //</b> Behebung zweier Tippfehler (Andreas Gehlman → Gehlmann, Oliver Kirchner: Mdl → MdL)
          sowie Aktualisierung und Korrektur der Positionen von Parteimitgliedern der AfD.
          Maximilian Krah: MdEP (seit 2019) → MdEP (2019 bis 2025), MdB (seit 2025)
          Beatrix von Storch: MdB (seit 2017), stellvertretende Bundessprecherin und Fraktionsvorsitzende der AfD → MdB (seit 2017), stellvertretende Vorsitzende der AfD-Bundestagsfraktion
          Markus Frohnmaier: MdB (seit 2017), Co-Vorsitzender AfD-Landesverband Baden-Württemberg → MdB (seit 2017), Landesvorsitzender AfD Baden-Württemberg (seit 2022)
        </li>
        <li>
          <b>10.02.2025 //</b> Korrektur eines Tippfehlers im Zitat „Das deutsche Volk ist nicht
          länger mehr gewillt, sich zu beugen!“: Ergänzung eines fehlenden Kommas
        </li>
        <li>
          <b>01.02.2025 //</b> Korrektur eines Tippfehlers bei der Datierung des Zitates „Wir müssen
          unsere Männlichkeit wieder entdecken. Denn nur wenn wir unsere Männlichkeit
          wiederentdecken, werden wir mannhaft. Und nur wenn wir mannhaft werden, werden wir
          wehrhaft, und wir müssen wehrhaft werden, liebe Freunde!“ [Jac2015]: Änderung 2025 zu 2015
        </li>
      </ul>
    </section>
    <SourceCollection />
  </TextPageWrapper>
</template>

<style scoped>
b {
  font-weight: 700;
}
</style>
