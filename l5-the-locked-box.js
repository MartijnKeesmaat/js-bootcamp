 const box = {
   locked: true,
   unlock() {
     this.locked = false;
   },
   lock() {
     this.locked = true;
   },
   _content: [],
   get content() {
     if (this.locked) throw new Error("Locked!");
     return this._content;
   }
 };

 function withBoxUnlocked(body) {
   try {
     box.unlock();
     body();
   } catch (e) {
     alert(e);
   } finally {
     if (box.locked) box.lock();
   };
 }

 // A finally block says “no matter what happens, run this code after trying to  run the code in the try block.”

 withBoxUnlocked(function () {
   box.content.push("gold piece");
 });

 try {
   withBoxUnlocked(function () {
     throw new Error("Pirates on the horizon! Abort!");
   });
 } catch (e) {
   console.log("Error raised:", e);
 }
 console.log(box.locked);
 // → true