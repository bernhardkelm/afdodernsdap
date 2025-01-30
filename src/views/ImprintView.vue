<script setup lang="ts">
import { ROUTE_NAMES, ROUTE_PATHS } from '@/router';
import TextPageWrapper from '@/components/TextPageWrapper.vue';

import { changeRoute } from '@/helpers/changeRoute';
</script>

<template>
  <TextPageWrapper>
    <h1>Impressum.</h1>

    <section>
      <h3>Für „AfD oder NSDAP?“ verantwortlich</h3>
      <address>
        Bernhard Kelm<br />
        c/o MDC Management#650<br />
        Welserstraße 3<br />
        87463 Dietmannsried<br />
        E-Mail:
        <a class="link" href="mailto:hallo@afdodernsdap.de" tabindex="1">hallo@afdodernsdap.de</a>
      </address>
      <p>
        Des Weiteren Sven Schäfermeier, Carlos Bystron, Finn Maybauer, Keno Hünseler, Florian
        Bräunsbach und Benedikt Engel.
      </p>
    </section>

    <section>
      <h2>
        Inhaltlich Verantwortlicher <br />
        <span class="light">gem. § 18 Abs. 2 MStV</span>
      </h2>
      <p>Bernhard Kelm (Anschrift und Kontakt s.o.)</p>
    </section>

    <section>
      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte unserer App/Website wurden mit größter Sorgfalt erstellt. Wir übernehmen jedoch
        keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
        Inhalte. Jegliche Haftung für Schäden, die aus der Nutzung der Inhalte entstehen, ist –
        soweit gesetzlich zulässig – ausgeschlossen
      </p>
      <p>
        Unsere App/Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Daher können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
        verantwortlich. Zum Zeitpunkt der Verlinkung wurden die verlinkten Seiten auf mögliche
        Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
    </section>

    <section>
      <h2>Datenschutzerklärung</h2>
      <p>
        Unsere Datenschutzerklärung finden Sie
        <a
          class="link"
          :href="ROUTE_PATHS.GDPR"
          @click="changeRoute($event, ROUTE_NAMES.GDPR)"
          tabindex="1"
          >hier</a
        >.
      </p>
    </section>
  </TextPageWrapper>
</template>

<style>
a {
  text-decoration: underline;
}
</style>
