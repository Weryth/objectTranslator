import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TranslateService } from './translate.service';

@Controller('translate')
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {}

  @Post()
  async Translate(@Body() data) {
    return this.translateService.TranslateText(data.content, data.lang);
  }

  @Post(':lang')
  async TranslatedObj(@Param('lang') lang, @Body() data) {
    return this.translateService.TranslateObject(data, lang);
  }
}
