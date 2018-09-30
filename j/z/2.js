'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

function solution(U, N) {
    const userId = U.id;
    const userGender = U.gender;
    const brandsNumber = N;
    console.log('brandsNumber', brandsNumber);
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        const likedPromise = getLikedBrands(userId);
        const topPromise = getTopBrandsForGender(userGender);
        Promise.all([likedPromise, topPromise])
        .then((results) => {
            const likedArrNames = results[0].map(el => el.name);
            console.log('likedArrNames', likedArrNames);
            const topArrNames = results[1].map(el => el.name);
            console.log('topArrNames', topArrNames);
            const totalSet = new Set([...likedArrNames, ...topArrNames]);
            const totalArr = Array.from(totalSet);
            console.log('totalArr', totalArr.length);
            console.log('totalArr', totalArr);
            if (totalArr.length >= brandsNumber) {
                resolve(totalArr.slice(0, brandsNumber));
            } else {
                reject(new CustomError('Not enough data'));
            }
        })
        .catch(() => {
            reject(new CustomError('Not enough data'));
        })
    });
}
