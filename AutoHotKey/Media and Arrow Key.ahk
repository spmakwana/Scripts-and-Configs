;This is for arrow keys
*!I::SendInput, % (GetKeyState("Shift", "P") ? "+" : "") (GetKeyState("Ctrl", "P") ? "^" : "") "{Up}"
*!K::SendInput, % (GetKeyState("Shift", "P") ? "+" : "") (GetKeyState("Ctrl", "P") ? "^" : "") "{Down}"
*!J::SendInput, % (GetKeyState("Shift", "P") ? "+" : "") (GetKeyState("Ctrl", "P") ? "^" : "") "{Left}"
*!L::SendInput, % (GetKeyState("Shift", "P") ? "+" : "") (GetKeyState("Ctrl", "P") ? "^" : "") "{Right}"
*!U::SendInput, % (GetKeyState("Shift", "P") ? "+" : "") (GetKeyState("Ctrl", "P") ? "^" : "") "{Home}"
*!O::SendInput, % (GetKeyState("Shift", "P") ? "+" : "") (GetKeyState("Ctrl", "P") ? "^" : "") "{End}"
*!h::SendInput, % (GetKeyState("Shift", "P") ? "+" : "") (GetKeyState("Ctrl", "P") ? "^" : "") "{BackSpace}"

; AutoHotkey Media Keys
^!Space::Send       {Media_Play_Pause}
^!Left::Send        {Media_Prev}
^!Right::Send       {Media_Next}
^!NumpadMult::Send  {Volume_Mute}
^!NumpadAdd::Send   {Volume_Up}
^!NumpadSub::Send   {Volume_Down}

; Create text file by pressing F4 Key
F4::
Macro1:
Click, Right, 1
Sleep, 10
SendRaw, wt
Send, ^A
Send, README.md
Sleep, 100
Send, {enter}
Sleep, 10
Send, {enter}
Return