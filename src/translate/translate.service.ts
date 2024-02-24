import { Injectable } from '@nestjs/common';
import translate = require('@iamtraction/google-translate');

@Injectable()
export class TranslateService {
  async TranslateObject(
    obj: Record<string, any>,
    lang: string,
  ): Promise<Record<string, any>> {
    const resultObj = { ...obj };

    if (
      resultObj.translateContent &&
      typeof resultObj.translateContent === 'object'
    ) {
      const keys = Object.keys(resultObj.translateContent);

      for (const key of keys) {
        if (typeof resultObj.translateContent[key] === 'string') {
          resultObj.translateContent[key] = await this.TranslateText(
            resultObj.translateContent[key],
            lang,
          );
        }
      }
    }

    return resultObj;
  }

  async TranslateText(text: string, lang: string): Promise<string> {
    try {
      const res = await translate(text, { to: lang });
      return res.text;
    } catch (err) {
      console.error(err);
      // В случае ошибки возвращаем исходный текст или сообщение об ошибке
      return text;
    }
  }
}
