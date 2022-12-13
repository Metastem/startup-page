import React from "react";

class List1 extends React.Component {
  render() {
    return(
      <>
        <ul class=" text-left text-off-white1 m-0 pl-5 pt-1 before:block before:absolute left-0 w-1 h-3 border-solid border-teal-600 relative list-none mb-2">
            <li class="font-black text-lg underline underline-offset-4 decoration-2 decoration-off-white1 text-center">Popular</li>
            <li class=""><a href="https://go.metastem.su/">GoSearch</a></li>
            <li class=""><a href="https://bb.metastem.su/">bbMusic</a></li>
            <li class=""><a href="https://translate.metastem.su/">Translator</a></li>
        </ul>
      </>
    );
  }
}

export default "List1" > src/assets/lists/list1.jsx
