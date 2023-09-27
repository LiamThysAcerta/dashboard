import Environment from './Environment';

export class Project {
  constructor(public name: String, public environments: Environment[]) {}
}
