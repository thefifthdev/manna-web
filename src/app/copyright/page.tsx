import type { Metadata } from "next";
import LegalLayout from "../../../components/LegalLayout";
import { APP_NAME, EFFECTIVE_DATE } from "../../../lib/constants";

export const metadata: Metadata = {
  title: `Copyright — ${APP_NAME}`,
  description: `Copyright and attribution for content used in ${APP_NAME}.`,
};

export default function CopyrightPage() {
  return (
    <LegalLayout
      title="Copyright &amp; Attributions"
      eyebrow="Copyright"
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        {APP_NAME} delivers scripture from multiple translations, each with
        its own copyright status. This page acknowledges those rights
        holders and the terms under which their translations are used in the
        app.
      </p>

      <h2>Scripture translations</h2>

      <h3>King James Version (KJV)</h3>
      <p>
        <strong>Public Domain</strong> in the United States and most
        jurisdictions. In the United Kingdom the Crown Patent places certain
        restrictions on publication; {APP_NAME} displays the standard public
        text in contexts permitted by those rights.
      </p>

      <h3>New Living Translation (NLT)</h3>
      <p>
        Scripture quotations marked NLT are taken from the Holy Bible,{" "}
        <em>New Living Translation</em>, copyright © 1996, 2004, 2015 by{" "}
        <strong>Tyndale House Foundation</strong>. Used by permission of{" "}
        <strong>Tyndale House Publishers</strong>, Carol Stream, Illinois
        60188. All rights reserved.
      </p>

      <h3>New International Version (NIV)</h3>
      <p>
        Scripture quotations marked NIV are taken from the Holy Bible,{" "}
        <em>New International Version®, NIV®</em>. Copyright © 1973, 1978,
        1984, 2011 by <strong>Biblica, Inc.®</strong> Used by permission. All
        rights reserved worldwide.
      </p>

      <h2>Scripture API</h2>
      <p>
        Scripture content is delivered through <strong>API.Bible</strong>,
        operated by the <strong>American Bible Society</strong>. {APP_NAME}{" "}
        uses API.Bible under its standard developer license. Translation
        copyrights remain with their respective rights holders as listed
        above.
      </p>

      <h2>Brand &amp; design</h2>
      <p>
        The {APP_NAME} name, mark, logo, Lottie animations, application
        icons, adaptive icon foregrounds, splash imagery, screen designs,
        share-card compositions, and marketing copy are © 2026 {APP_NAME}.
        All rights reserved.
      </p>

      <h2>Typography</h2>
      <p>
        Typeset in <strong>DM Sans</strong> — designed by Colophon Foundry
        and Indian Type Foundry. Licensed under the SIL Open Font License,
        Version 1.1.
      </p>

      <h2>Fair use &amp; personal sharing</h2>
      <p>
        You may quote individual verses and generate share cards from
        passages for personal, non-commercial sharing. Commercial
        redistribution of copyrighted translation text requires permission
        from the rights holder.
      </p>

      <h2>Takedown &amp; copyright concerns</h2>
      <p>
        If you believe content shown in the app infringes your copyright,
        please contact us with details of the work and the asserted
        infringement. We will review and respond promptly.
      </p>

      <p className="mt-10 text-[13px] text-[#9B9B9B]">
        This page last updated {EFFECTIVE_DATE}.
      </p>
    </LegalLayout>
  );
}
