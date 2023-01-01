export const thoughtUL = document.querySelector('ul');

export const addToDOM = (destination) => {
  return (content) => {
    // I don't advocate for the use of innerHTML outside of the confines of curriculum work
    // This is added with acknowledgement of the security concerns because teaching how to complete this functionality without innerHTMl takes forever. 
    destination.innerHTML += content;
  }
}
