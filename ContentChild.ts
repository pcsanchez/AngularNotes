// When we want to access a local reference in the content (not view) of a component.
// We can use ContentChild.

@ContentChild('<selector>', {static: true}) <variable name>: ElementRef;