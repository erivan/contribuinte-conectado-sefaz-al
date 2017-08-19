import Realm from 'realm';
import  Schemas  from './../schema';

const table = 'Authentication';
const schema = Schemas.find((schema) => { return schema.name === table } );
const repo = new Realm({ schema: [ schema ] });

const AuthRepository = {

  all:() => {
    return repo.objects(table);
  },
  create: (data) => {
    repo.write(() => {
      repo.create(table, data);
    })
  },
}

export default AuthRepository;
