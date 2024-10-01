import { Injectable } from '@angular/core';

@Injectable()
export class GlobalStore {
  constructor(
  ) { }

  'dialog' : any = null;

  navigate(route:string)
  {
    window.location.href = `${route}`;
  }
  copyToClipboard(content:string, name:string)
  {
    if(window.isSecureContext && navigator.clipboard)
    {
      navigator.clipboard.writeText(content);
      this.dialog = null;
      this.dialog = {
        'text'    : `${name} has copied into clipboard.`,
        'callback': () => {
          this.dialog = null;
        }
      };
    }
    else
    {
      this.unsecuredCopyToClipboard(content, name);
    }
  }
  unsecuredCopyToClipboard(text:string, name:string)
  {
    const textArea = document.createElement("textarea"); 
    textArea.value = text; 
    document.body.appendChild(textArea); 
    textArea.focus();textArea.select(); 
    try{
      document.execCommand('copy');
      this.dialog = null;
      this.dialog = {
        'text'    : `${name} has copied into clipboard.`,
        'callback': () => {
          this.dialog = null;
        }
      };
    }
    catch(err)
    {
      this.dialog = null;
      this.dialog = {
        'text'    : `Clipboard is not working. Please try again.`,
        'callback': () => {
          this.dialog = null;
        }
      };
    }
    document.body.removeChild(textArea)
  }
  calculatePMR(gpt:number)
  {
    // 1.0
    if(gpt >= 0 && gpt <= 500)
    {
      return ((gpt / 100) * 0.2).toFixed(2);
    }
    // 2.0
    else if(gpt >= 501 && gpt <= 1500)
    {
      let value = ((gpt - 500) / 100) * 0.2;
      return (value + 1.0).toFixed(2);
    }
    // 3.0
    else if(gpt >= 1501 && gpt <= 3000)
    {
      let value = ((gpt - 1500) / 150) * 0.1;
      return (value + 2.0).toFixed(2);
    }
    // 4.0
    else if(gpt >= 3001 && gpt <= 5000)
    {
      let value = ((gpt - 3000) / 200) * 0.1;
      return (value + 3.0).toFixed(2);
    }
    // 5.0
    else if(gpt >= 5001 && gpt <= 8000)
    {
      let value = ((gpt - 5000) / 300) * 0.1;
      return (value + 4.0).toFixed(2);
    }
    // 5.0++
    else if(gpt >= 8001)
    {
      let value = ((gpt - 8000) / 300) * 0.1;
      return (value + 5.0).toFixed(2);
    }
    else
    {
      return 'N/A'
    }
  }
}