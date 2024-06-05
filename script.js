function showMembers() {
    document.getElementById('members-heading').classList.add('active');
    document.getElementById('members-heading').classList.remove('inactive');
    document.getElementById('alumni-heading').classList.remove('active');
    document.getElementById('alumni-heading').classList.add('inactive');
    document.getElementById('members-container').classList.remove('hidden');
    document.getElementById('alumni-container').classList.add('hidden');
}

function showAlumni() {
    document.getElementById('members-heading').classList.remove('active');
    document.getElementById('members-heading').classList.add('inactive');
    document.getElementById('alumni-heading').classList.add('active');
    document.getElementById('alumni-heading').classList.remove('inactive');
    document.getElementById('members-container').classList.add('hidden');
    document.getElementById('alumni-container').classList.remove('hidden');
}

// Set initial state
document.getElementById('members-heading').classList.add('active');
document.getElementById('alumni-heading').classList.add('inactive');
document.getElementById('alumni-container').classList.add('hidden');
