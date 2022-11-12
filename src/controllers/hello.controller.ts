// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }

  @get('/bye')
  bye():string{
    return 'Bye';
  }
 // constructor() {}

}
