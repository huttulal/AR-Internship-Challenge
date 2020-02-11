// @input SceneObject[] items

// Disable everything but the first item
for (var i = 1; i < script.items.length; i++)
{
  script.items[i].enabled = false;
}

// Remember what item is currently visible
var currentItemIndex = 0;

// Define what happens when you tap
function activateNextItem ()
{
  // Disable the current item.
  script.items[currentItemIndex].enabled = false;

  // Increment the current item index
  currentItemIndex++;

  // Wrap the current item index back around
  currentItemIndex = currentItemIndex % script.items.length;

  // Enable the new item.
  script.items[currentItemIndex].enabled = true;
}

// Bind the function to the touch event
var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(activateNextItem);
