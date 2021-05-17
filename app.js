// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

db.collection("members").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()} `);
    });
});

db.collection("members").where("name", "==", "ketan").get().then(querySnapshot => {
    thing = querySnapshot.docs[0];
    //console.log(thing.id)
    thing.ref.update({
        batch:"y4"
    })
});

// db.collection("members").doc(thing.id).update({
//     batch:"y3"
// });

db.collection("members").where("name", "==", "ketan").get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
    console.log(doc.data())
    console.log(doc.id)
    })
});

//console.log(`the id is ==>  ${changeid.id}`);

