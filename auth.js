auth.onAuthStateChanged(user => {
    if (user) {

        db.collection('contacts').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type == 'added') {
                    renderContact(change.doc);
                } else if (change.type == 'removed') {
                    let li = contactList.querySelector('[data-id=' + change.doc.id + ']');
                    contactList.removeChild(li);
                }
            });
            setupUI(user);
        });

        db.collection('organizations').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type == 'added') {
                    renderOrgs(change.doc);
                } else if (change.type == 'removed') {
                    let li = orgList.querySelector('[data-id=' + change.doc.id + ']');
                    orgList.removeChild(li);
                }
            });
            setupUI(user);
        });


        db.collection('schools').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type == 'added') {
                    renderSchools(change.doc);
                } else if (change.type == 'removed') {
                    let li = schoolList.querySelector('[data-id=' + change.doc.id + ']');
                    schoolList.removeChild(li);
                }
            });
            setupUI(user);
        });

        db.collection('works').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type == 'added') {
                    renderWork(change.doc);
                } else if (change.type == 'removed') {
                    let li = workList.querySelector('[data-id=' + change.doc.id + ']');
                    workList.removeChild(li);
                }
            });
            setupUI(user);
        });

        db.collection('about').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type == 'added') {
                    renderAbout(change.doc);
                } else if (change.type == 'removed') {
                    let li = aboutList.querySelector('[data-id=' + change.doc.id + ']');
                    aboutList.removeChild(li);
                }
            });
            setupUI(user);
        });


        setupUI(user);

    } else {

        setupUI();

    }
})

// add information
const createForm = document.querySelector('#schoolForm');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('schools').add({
        school: createForm['school-input'].value,
        level: createForm['level-input'].value,
        years: createForm['year-input'].value,
        img: createForm['imgschool-input'].value
    }).then(() => {
        createForm.reset();
    })
})

const addWork = document.querySelector('#workForm');
addWork.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('works').add({
        Name: addWork['work-input'].value,
        img: addWork['img-input'].value
    }).then(() => {
        addWork.reset();
    })
})

const addOrg = document.querySelector('#orgForm');
addOrg.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('organizations').add({
        description: addOrg['org-input'].value,
        img: addOrg['img_org-input'].value,
        name: addOrg['org-input'].value
    }).then(() => {
        addOrg.reset();
    })
})

const addContact = document.querySelector('#contactForm');
addContact.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('contacts').add({
        link: addContact['link-input'].value,
        img: addContact['img_con-input'].value
    }).then(() => {
        addContact.reset();
    })
})

const addAbout = document.querySelector('#aboutForm');
addAbout.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('about').add({
        aboutme: addAbout['intro-input'].value,
        info: addAbout['caption-input'].value
    }).then(() => {
        addAbout.reset();
    })
})



//login 
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['email-input-known'].value;
    const password = loginForm['pass-input-known'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user);
            loginForm.reset();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
})

//auth state change

//logout form
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        console.log('user logged out');
    });
});