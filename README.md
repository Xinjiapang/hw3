What code draws the blades of grass?
  line(x, height-10, x+random(-10, 10), height-10-random(h));
What code makes the "lawnmower" come by? How often does it come by?
 when random() > 0.999, the "lawnmover"will come by once.
What's the point of the h variable?
  the point of the H variable is to control the heigh of the blades.
What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
  Height-10 is to set the root of the blades at the rectangle. The height-10-random(h) is to set the top of one blade heighter than the root of the blades, which makes the blades look like are growing.
