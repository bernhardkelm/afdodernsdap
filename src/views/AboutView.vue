<script setup lang="ts">
import { ROUTE_NAMES, ROUTE_PATHS } from '@/router';
import { changeRoute } from '@/helpers/changeRoute';

// Components
import TextPageWrapper from '@/components/TextPageWrapper.vue';
import Button from '@/components/helper/ButtonComponent.vue';
</script>

<template>
  <TextPageWrapper>
    <h1>Über das Projekt.</h1>
    <section>
      <h2>Wer wird verglichen?</h2>
      <p>
        Die aufgeführten Zitate stammen entweder von Anhängern der NSDAP, der Partei Adolf Hitlers,
        die zwischen 1933 und 1945 Millionen Menschen entrechtete, verfolgte und systematisch
        ermordete, oder von aktiven Parteimitgliedern der AfD – einer Partei, die 2013 gegründet
        wurde, in 15 deutschen Landesparlamenten vertreten ist und seit 2017 im deutschen Bundestag
        sitzt. Drei Landesverbände sowie die Jugendorganisation der AfD werden vom Bundesamt für
        Verfassungsschutz als gesichert rechtsextremistisch eingestuft.
      </p>
      <p>
        Am 29. Januar 2025 erhielt erstmals ein Antrag im Bundestag mithilfe der AfD eine Mehrheit.
        Der Antrag wurde von der CDU-Fraktion eingebracht – in dem Wissen, dass er nur mit den
        Stimmen der AfD beschlossen werden konnte.
      </p>
      <p>
        Nach aktuellen Umfragen könnte sie bei der nächsten Bundestagswahl über 20% der Zweitstimmen
        erhalten und damit zweitstärkste Kraft werden.
      </p>
    </section>
    <section>
      <h2>Warum dieser Vergleich?</h2>
      <p>
        Sprache formt Wirklichkeit - daher waren Worte schon immer zentraler Bestandteil politischer
        Propaganda.
      </p>
      <p>
        Die NSDAP nutzte Worte wie die hier aufgeführten Zitate, um zu spalten, zu hetzen und
        letztlich zu Gewalt und Vernichtung aufzurufen. Heute sehen wir Parallelen in der Rhetorik
        der AfD, die ähnliche Mechanismen anwendet: das Schüren von Angst, das Stigmatisieren von
        Minderheiten und das Anzweifeln demokratischer Strukturen.
      </p>
      <p>
        Deswegen müssen wir dem Bagatellisieren von menschenverachtenden Aussagen entschieden
        entgegentreten. Die zunehmende Normalisierung der AfD und ihrer politischen Standpunkte
        sowie die Übernahme ihrer Sprache und Ideen durch andere Parteien stellen eine Gefahr für
        unsere Demokratie dar, die nicht ignoriert werden darf.
      </p>
    </section>
    <section>
      <h2>Verwendung von Quellen.</h2>
      <p>
        Alle Zitate der AfD stammen von amtierenden Parteimitgliedern und wurden aus öffentlich
        zugänglichen Quellen wie Reden, Interviews oder Social-Media-Beiträgen zusammengestellt.
        <a
          class="link"
          :href="ROUTE_PATHS.SOURCES"
          @click="changeRoute($event, ROUTE_NAMES.SOURCES)"
          tabindex="1"
        >
          Mehr über die verwendeten Quellen erfahren.
        </a>
      </p>
      <p>
        Anmerkungen und Hinweise zu den Quellen können an
        <a class="link" href="mailto:hallo@afdodernsdap.de" tabindex="1">hallo@afdodernsdap.de</a>
        gemeldet werden.
      </p>
      <p>
        Sollten Änderungen an den Quellen vorgenommen werden, sind diese
        <a
          class="link"
          :href="`${ROUTE_PATHS.SOURCES}#changes`"
          @click="changeRoute($event, ROUTE_NAMES.SOURCES, '#changes')"
          tabindex="1"
          >auf unserer Quellen-Seite</a
        >
        nachvollziehbar dokumentiert.
      </p>
    </section>
    <section>
      <h2>Eine Einladung zum Handeln.</h2>
      <p>
        Dieses Projekt lebt von zivilgesellschaftlicher Beteiligung. Es wurde von einer Gruppe von
        Arbeitskolleg*innen initiiert und als Open-Source-Projekt auf
        <a href="https://github.com/bernhardkelm/afdodernsdap" target="_blank" tabindex="1"
          >GitHub</a
        >
        bereitgestellt.
      </p>
      <p>
        Wir laden dazu ein, sich mit der Macht von Sprache zu befassen: Mit den tiefgreifenden
        Konsequenzen, die sie historisch hatte und zukünftig haben wird – besonders im Kontext der
        kommenden Bundestagswahl.
      </p>
      <p>
        Aber auch im Alltag gilt: Werdet laut, stellt euch gegen Diskriminierung und Hass, und helft
        dabei, ein Bewusstsein dafür zu schaffen, wie politische Sprache unsere Gesellschaft prägt.
      </p>
      <p>
        Teile dieses Projekt auf deinen Social Media Kanälen, dafür haben wir einige Vorlagen und
        Sticker für die vorbereitet.
      </p>
      <Button
        @click="changeRoute($event, ROUTE_NAMES.DOWNLOADS)"
        :href="ROUTE_PATHS.DOWNLOADS"
        icon="image"
        as="a"
        tabindex="1"
      >
        Social Media Grafiken und Sticker
      </Button>
    </section>
    <section>
      <h2>Ihr wollt mit uns in Kontakt treten?</h2>
      <p>
        Ihr habt generelle Fragen oder Anregungen? Schreibt uns unter
        <a class="link" href="mailto:hallo@afdodernsdap.de" tabindex="1">hallo@afdodernsdap.de</a>.
      </p>
      <p>
        Falls Ihr Presseanfragen habt sind wir für euch unter
        <a class="link" href="mailto:press@afdodernsdap.de" tabindex="1">press@afdodernsdap.de</a>
        erreichbar.
      </p>
      <p>
        Ihr habt auch eine Idee für ein Projekt? Oder Ihr braucht Unterstützung bei einem
        bestehenden Projekt? Dann schreibt uns gerne unter
        <a class="link" href="mailto:pojects@afdodernsdap.de" tabindex="1"
          >pojects@afdodernsdap.de</a
        >.
      </p>
    </section>
  </TextPageWrapper>
</template>
