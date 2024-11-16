function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
    if (!dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.add('opacity-100');
        dropdownMenu.classList.remove('opacity-0');
    } else {
        dropdownMenu.classList.add('opacity-0');
        dropdownMenu.classList.remove('opacity-100');
    }
}
