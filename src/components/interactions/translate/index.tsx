import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";

import i18nConfig from "@i18n";
import { Title } from "@components/interactions/translate/style";

const { locales } = i18nConfig;

/**
 * This component is generated as en example usage of next-translate
 *
 * To learn more about next-translate and i18n
 * please visit https://github.com/vinissimus/next-translate
 */

export const NextTranslateExample: React.FC<{ defaultNamespace: string }> = ({
  defaultNamespace,
}) => {
  const { t, lang } = useTranslation(defaultNamespace);

  return (
    <div>
        <div className="text-right">
          {locales.map((lng) => (
            <Link href="/pages" passHref locale={lng} key={lng}>
              <a className="mr-2">{t(`common:language.${lng}`)}</a>
            </Link>
          ))}
        </div>
      <Title>{t`common:title`}</Title>
      <p>{t`common:subtitle`}</p>
    </div>
  );
};
