/* tslint:disable */
import slugify from '../src';

const input = document.getElementById('input');
if (input) {
  input.addEventListener('change', onChange);
}

function onChange(event: any) {
  const result = document.getElementById('result');

  if (result) {
    result.innerHTML = slugify(event.target.value);
  }
}
