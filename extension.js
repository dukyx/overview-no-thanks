/*  
  Overview, no thanks.
*/

const Main = imports.ui.main;

function init() {
   // overview = new Overview.Overview();
}

function enable() {
   Main.layoutManager._startupAnimation = function (){ this._startupAnimationComplete(); }
}

function disable() {
    Main.layoutManager._startupAnimation = function (){ 
        if (Meta.is_restart())             
            this._startupAnimationComplete();         
        else if (Main.sessionMode.isGreeter)
            this._startupAnimationGreeter();        
        else             
            this._startupAnimationSession();
    }
}
