import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
// import { Request } from 'express';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { UpdateCatDto } from 'src/dto/update-cat.dto';
import { ListAllEntities } from 'src/dto/list-all-details.dto';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   @HttpCode(201) // the response status code
//   @Header('Cache-Control', 'none') // To specify a custom response header
//   // create(): string {
//   //   return 'This action adds a new cats';
//   // }
//   create(@Body() createCatDto: CreateCatDto): string {
//     return 'This action adds a new cats';
//   }

//   @Get()
//   // @Redirect('https://nestjs.com', 301)
//   findAll(@Req() request: Request): string {
//     return 'This action returns all cats' + JSON.stringify(request.query);
//   }

//   @Get('ab*cd')
//   findAll1() {
//     return 'This route uses a wildcard';
//   }

//   @Get('docs')
//   @Redirect('https://docs.nestjs.com', 302)
//   getDocs(@Query('version') version) {
//     if (version && version === '5')
//       return { url: 'https://docs.nestjs.com/v5/' };
//   }

//   @Get(':id')
//   findOne(@Param() params): string {
//     console.log(params.id);
//     return `This action returns a #${params.id} cat`;
//   }

//   @Get()
//   async findAll2(): Promise<any[]> {
//     return [];
//   }
// }

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}


function Params() {
  throw new Error('Function not implemented.');
}
