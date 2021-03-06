/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Blocklist of unit tests from angular/material2 with ivy that are skipped when running on
 * angular/angular. As bugs are resolved, items should be removed from this blocklist.
 *
 * The `notes` section should be used to keep track of specific issues associated with the failures.
 */

// clang-format off
// tslint:disable

window.testBlocklist = {
  "CdkTree flat tree should initialize should be able to use units different from px for the indentation": {
    "error": "Error: Failed: Expected node level to be 15rem but was 28px",
    "notes": "Breaking change: Change detection follows insertion tree only, not declaration tree (CdkTree is OnPush)"
  },
  "CdkTree flat tree should initialize should default to px if no unit is set for string value indentation": {
    "error": "Error: Failed: Expected node level to be 17px but was 28px",
    "notes": "Breaking change: Change detection follows insertion tree only, not declaration tree (CdkTree is OnPush)"
  },
  "CdkTree flat tree with toggle should expand/collapse the node": {
    "error": "Error: Failed: Expected node level to be 40px but was ",
    "notes": "Breaking change: Static directive inputs evaluated in creation mode (CdkTreeNode.mostRecentTreeNode.data is set after inputs)"
  },
  "CdkTree flat tree with toggle should expand/collapse the node recursively": {
    "error": "Error: Failed: Expected node level to be 40px but was ",
    "notes": "Breaking change: Static directive inputs evaluated in creation mode (CdkTreeNode.mostRecentTreeNode.data is set after inputs)"
  },
  "CdkTree nested tree with toggle should expand/collapse the node multiple times": {
    "error": "Error: Expected 3 to be 1, 'Expect node expanded'.",
    "notes": "1) Breaking change: Change detection follows insertion tree only, not declaration tree (CdkTree is OnPush) - 2) Breaking change: Content queries and descendants flag (fix test by removing <div> in NestedCdkTreeAppWithToggle)"
  },
  "CdkTree nested tree with toggle should expand/collapse the node recursively": {
    "error": "Error: Failed: Expected node descendant num to be 2 but was 0",
    "notes": "Breaking change: Content queries and descendants flag (fix test by removing <div> in NestedCdkTreeAppWithToggle)"
  },
  "MatSidenav should be fixed position when in fixed mode": {
    "error": "Error: Expected ng-tns-c22979-0 ng-trigger ng-trigger-transform mat-drawer mat-sidenav mat-drawer-over ng-star-inserted to contain 'mat-sidenav-fixed'.",
    "notes": "FW-1132: Host class bindings don't work if super class has host class bindings"
  },
  "MatSidenav should set fixed bottom and top when in fixed mode": {
    "error": "Error: Expected '' to be '20px'.",
    "notes": "FW-1132: Host class bindings don't work if super class has host class bindings"
  },
  "MatTree flat tree with toggle should expand/collapse the node": {
    "error": "Error: Expected 0 to be 1, 'Expect node expanded one level'.",
    "notes": "Breaking change: Static directive inputs evaluated in creation mode (CdkTreeNode.mostRecentTreeNode.data is set after inputs)"
  },
  "MatTree flat tree with toggle should expand/collapse the node recursively": {
    "error": "Error: Expected 0 to be 3, 'Expect nodes expanded'.",
    "notes": "Breaking change: Static directive inputs evaluated in creation mode (CdkTreeNode.mostRecentTreeNode.data is set after inputs)"
  },
  "MatTree nested tree with toggle should expand/collapse the node": {
    "error": "Error: Expected 0 to be 1, 'Expect node expanded'.",
    "notes": "1) Breaking change: Content queries and descendants flag (fix test by removing <div> in NestedMatTreeAppWithToggle) - 2) Breaking change: Ivy inherits metadata from superclasses (remove (click) in MatTreeNodeToggle)"
  },
  "MatTree nested tree with toggle should expand/collapse the node recursively": {
    "error": "Error: Expected 0 to be 3, 'Expect node expanded'.",
    "notes": "1) Breaking change: Content queries and descendants flag (fix test by removing <div> in NestedMatTreeAppWithToggle) - 2) Breaking change: Ivy inherits metadata from superclasses (remove (click) in MatTreeNodeToggle)"
  },
  "Dialog should set the proper animation states": {
    "error": "TypeError: Cannot read property 'componentInstance' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatAutocomplete aria should set role of autocomplete panel to listbox": {
    "error": "TypeError: Cannot read property 'nativeElement' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatAutocomplete aria should set aria-owns based on the attached autocomplete": {
    "error": "TypeError: Cannot read property 'nativeElement' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatDialog should set the proper animation states": {
    "error": "TypeError: Cannot read property 'componentInstance' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu animations should enable ripples on items by default": {
    "error": "TypeError: Cannot read property 'query' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu animations should disable ripples on disabled items": {
    "error": "TypeError: Cannot read property 'query' of undefined",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu animations should disable ripples if disableRipple is set": {
    "error": "TypeError: Cannot read property 'query' of undefined",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu nested menu should close submenu when hovering over disabled sibling item": {
    "error": "TypeError: Cannot read property 'nativeElement' of undefined",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatMenu nested menu should not open submenu when hovering over disabled trigger": {
    "error": "TypeError: Cannot read property 'componentInstance' of null",
    "notes": "FW-1059: DebugNode.query should query nodes in the logical tree"
  },
  "MatSnackBar with TemplateRef should be able to open a snack bar using a TemplateRef": {
    "error": "Error: Expected ' Fries Pizza  ' to contain 'Pasta'.",
    "notes": "Breaking change: Change detection follows insertion tree only, not declaration tree (MatSnackBarContainer is OnPush)"
  }
};
// clang-format on