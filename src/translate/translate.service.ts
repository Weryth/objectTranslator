import { Injectable } from '@nestjs/common';
import translate = require('@iamtraction/google-translate');

@Injectable()
export class TranslateService {
  async TranslateObject(
    obj: Record<string, any>,
    lang: string,
  ): Promise<Record<string, any>> {
    const keys = Object.keys(obj);
    const translatedObj: Record<string, any> = {};

    for (const key of keys) {
      if (typeof obj[key] === 'string') {
        translatedObj[key] = await this.TranslateText(obj[key], lang);
      } else {
        translatedObj[key] = obj[key];
      }
    }

    return translatedObj;
  }

  async TranslateText(text: string, lang) {
    let translatedText = '';
    await translate(text, { to: lang })
      .then((res) => {
        translatedText = res.text;
      })
      .catch((err) => {
        console.error(err);
      });
    return translatedText;
  }
}
