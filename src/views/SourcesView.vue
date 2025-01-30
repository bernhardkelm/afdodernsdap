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
          Bisher wurden seit der Veröffentlichung keine Änderungen an den Quellen vorgenommen.
        </li>
      </ul>
    </section>
    <SourceCollection />
  </TextPageWrapper>
</template>
