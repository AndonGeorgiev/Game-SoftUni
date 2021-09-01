export function hasCollision(elementOne, elementTwo) {
    let first = elementOne.getBoundingClientRect();
    let second = elementTwo.getBoundingClientRect();

    return !(first.top > second.bottom || first.bottom < second.top || first.left > second.right || first.right < second.left);
}