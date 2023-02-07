function HanoiTower(n, firstTower, thirdTower, secondTower) {
    if (n === 1) {
        console.log(`Pindahkan Disk 1 dari menara ${firstTower} ke menara ${thirdTower}`);
        return
    }
    HanoiTower(n-1, firstTower, secondTower, thirdTower);
    console.log(`Pindahkan Disk ${n} dari menara ${firstTower} ke menara ${thirdTower}`);
    HanoiTower(n-1, secondTower, thirdTower, firstTower);
};

HanoiTower(3, 'A', 'B', 'C');