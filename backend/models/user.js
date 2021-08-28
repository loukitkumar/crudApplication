const db = require('../util/database');

module.exports=class User{
   constructor(title,body)
   {
       this.title=title;
       this.body=body;
   }

   static fetchAll()
   {
    return db.execute('SELECT * FROM demo');
   }
   static save(post)
   {
       return db.execute(
           'INSERT INTO demo(title,body) VALUES(?,?)',
           [post.title,post.body]
           )
   }

   static deleteitem(id)
   {
       return db.execute(
           'DELETE FROM demo WHERE id=?',[id]
       );
   }

   static updateitem(post)
   {
        return db.execute(
            'UPDATE demo SET title=?,body=? WHERE id=?',
             [post.title,post.body,post.id]
        )
   }
};