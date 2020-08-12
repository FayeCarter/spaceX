export const rocketsMock = {
  "data": [
    {
      "id":1,
      "active":false,
      "stages":2,
      "boosters":0,
      "cost_per_launch":6700000,
      "success_rate_pct":40,
      "first_flight":"2006-03-24",
      "country":"Republic of the Marshall Islands",
      "company":"SpaceX",
      "height":{
        "meters":22.25,
        "feet":73
      },
      "diameter":{
        "meters":1.68,
        "feet":5.5
      },
      "mass":{
        "kg":30146,
        "lb":66460
      },
      "payload_weights":[
        {
          "id":"leo",
          "name":"Low Earth Orbit",
          "kg":450,
          "lb":992
        }
      ],
      "first_stage":{
        "reusable":false,
        "engines":1,
        "fuel_amount_tons":44.3,
        "burn_time_sec":169,
        "thrust_sea_level":{
          "kN":420,
          "lbf":94000
        },
        "thrust_vacuum":{
          "kN":480,
          "lbf":110000
        }
      },
      "second_stage":{
        "reusable":false,
        "engines":1,
        "fuel_amount_tons":3.38,
        "burn_time_sec":378,
        "thrust":{
          "kN":31,
          "lbf":7000
        },
        "payloads":{
          "option_1":"composite fairing",
          "composite_fairing":{
            "height":{
              "meters":3.5,
              "feet":11.5
            },
            "diameter":{
              "meters":1.5,
              "feet":4.9
            }
          }
        }
      },
      "engines":{
        "number":1,
        "type":"merlin",
        "version":"1C",
        "layout":"single",
        "isp":{
          "sea_level":267,
          "vacuum":304
        },
        "engine_loss_max":0,
        "propellant_1":"liquid oxygen",
        "propellant_2":"RP-1 kerosene",
        "thrust_sea_level":{
          "kN":420,
          "lbf":94000
        },
        "thrust_vacuum":{
          "kN":480,
          "lbf":110000
        },
        "thrust_to_weight":96
      },
      "landing_legs":{
        "number":0,
        "material":null
      },
      "flickr_images":[
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg"
      ],
      "wikipedia":"https://en.wikipedia.org/wiki/Falcon_1",
      "description":"The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      "rocket_id":"falcon1",
      "rocket_name":"Falcon 1",
      "rocket_type":"rocket"
    },
    {
      "id":2,
      "active":true,
      "stages":2,
      "boosters":0,
      "cost_per_launch":50000000,
      "success_rate_pct":97,
      "first_flight":"2010-06-04",
      "country":"United States",
      "company":"SpaceX",
      "height":{
        "meters":70,
        "feet":229.6
      },
      "diameter":{
        "meters":3.7,
        "feet":12
      },
      "mass":{
        "kg":549054,
        "lb":1207920
      },
      "payload_weights":[
        {
          "id":"leo",
          "name":"Low Earth Orbit",
          "kg":22800,
          "lb":50265
        },
        {
          "id":"gto",
          "name":"Geosynchronous Transfer Orbit",
          "kg":8300,
          "lb":18300
        },
        {
          "id":"mars",
          "name":"Mars Orbit",
          "kg":4020,
          "lb":8860
        }
      ],
      "first_stage":{
        "reusable":true,
        "engines":9,
        "fuel_amount_tons":385,
        "burn_time_sec":162,
        "thrust_sea_level":{
          "kN":7607,
          "lbf":1710000
        },
        "thrust_vacuum":{
          "kN":8227,
          "lbf":1849500
        }
      },
      "second_stage":{
        "reusable":false,
        "engines":1,
        "fuel_amount_tons":90,
        "burn_time_sec":397,
        "thrust":{
          "kN":934,
          "lbf":210000
        },
        "payloads":{
          "option_1":"dragon",
          "option_2":"composite fairing",
          "composite_fairing":{
            "height":{
              "meters":13.1,
              "feet":43
            },
            "diameter":{
              "meters":5.2,
              "feet":17.1
            }
          }
        }
      },
      "engines":{
        "number":9,
        "type":"merlin",
        "version":"1D+",
        "layout":"octaweb",
        "isp":{
          "sea_level":288,
          "vacuum":312
        },
        "engine_loss_max":2,
        "propellant_1":"liquid oxygen",
        "propellant_2":"RP-1 kerosene",
        "thrust_sea_level":{
          "kN":845,
          "lbf":190000
        },
        "thrust_vacuum":{
          "kN":914,
          "lbf":205500
        },
        "thrust_to_weight":180.1
      },
      "landing_legs":{
        "number":4,
        "material":"carbon fiber"
      },
      "flickr_images":[
        "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
        "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
        "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
        "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
        "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
        "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
      ],
      "wikipedia":"https://en.wikipedia.org/wiki/Falcon_9",
      "description":"Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
      "rocket_id":"falcon9",
      "rocket_name":"Falcon 9",
      "rocket_type":"rocket"
    }
  ]
}

export const dragonsMock = {
  "data":[
    {
      "id":"dragon1",
      "name":"Dragon 1",
      "type":"capsule",
      "active":true,
      "crew_capacity":0,
      "sidewall_angle_deg":15,
      "orbit_duration_yr":2,
      "dry_mass_kg":4200,
      "dry_mass_lb":9300,
      "first_flight":"2010-12-08",
      "heat_shield":{
        "material":"PICA-X",
        "size_meters":3.6,
        "temp_degrees":3000,
        "dev_partner":"NASA"
      },
      "thrusters":[
        {
          "type":"Draco",
          "amount":18,
          "pods":4,
          "fuel_1":"nitrogen tetroxide",
          "fuel_2":"monomethylhydrazine",
          "isp":300,
          "thrust":{
            "kN":0.4,
            "lbf":90
          }
        }
      ],
      "launch_payload_mass":{
        "kg":6000,
        "lb":13228
      },
      "launch_payload_vol":{
        "cubic_meters":25,
        "cubic_feet":883
      },
      "return_payload_mass":{
        "kg":3000,
        "lb":6614
      },
      "return_payload_vol":{
        "cubic_meters":11,
        "cubic_feet":388
      },
      "pressurized_capsule":{
        "payload_volume":{
          "cubic_meters":11,
          "cubic_feet":388
        }
      },
      "trunk":{
        "trunk_volume":{
          "cubic_meters":14,
          "cubic_feet":494
        },
        "cargo":{
          "solar_array":2,
          "unpressurized_cargo":true
        }
      },
      "height_w_trunk":{
        "meters":7.2,
        "feet":23.6
      },
      "diameter":{
        "meters":3.7,
        "feet":12
      },
      "flickr_images":[
        "https://i.imgur.com/9fWdwNv.jpg",
        "https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg",
        "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
        "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg"
      ],
      "wikipedia":"https://en.wikipedia.org/wiki/SpaceX_Dragon",
      "description":"Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS)."
    },
    {
      "id":"dragon2",
      "name":"Dragon 2",
      "type":"capsule",
      "active":true,
      "crew_capacity":7,
      "sidewall_angle_deg":15,
      "orbit_duration_yr":2,
      "dry_mass_kg":6350,
      "dry_mass_lb":14000,
      "first_flight":"2019-03-02",
      "heat_shield":{
        "material":"PICA-X",
        "size_meters":3.6,
        "temp_degrees":3000,
        "dev_partner":"NASA"
      },
      "thrusters":[
        {
          "type":"Draco",
          "amount":18,
          "pods":4,
          "fuel_1":"nitrogen tetroxide",
          "fuel_2":"monomethylhydrazine",
          "isp":300,
          "thrust":{
            "kN":0.4,
            "lbf":90
          }
        },
        {
          "type":"SuperDraco",
          "amount":8,
          "pods":4,
          "fuel_1":"dinitrogen tetroxide",
          "fuel_2":"monomethylhydrazine",
          "isp":235,
          "thrust":{
            "kN":71,
            "lbf":16000
          }
        }
      ],
      "launch_payload_mass":{
        "kg":6000,
        "lb":13228
      },
      "launch_payload_vol":{
        "cubic_meters":25,
        "cubic_feet":883
      },
      "return_payload_mass":{
        "kg":3000,
        "lb":6614
      },
      "return_payload_vol":{
        "cubic_meters":11,
        "cubic_feet":388
      },
      "pressurized_capsule":{
        "payload_volume":{
          "cubic_meters":11,
          "cubic_feet":388
        }
      },
      "trunk":{
        "trunk_volume":{
          "cubic_meters":14,
          "cubic_feet":494
        },
        "cargo":{
          "solar_array":2,
          "unpressurized_cargo":true
        }
      },
      "height_w_trunk":{
        "meters":7.2,
        "feet":23.6
      },
      "diameter":{
        "meters":3.7,
        "feet":12
      },
      "flickr_images":[
        "https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg",
        "https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg",
        "https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg"
      ],
      "wikipedia":"https://en.wikipedia.org/wiki/Dragon_2",
      "description":"Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS). In addition, it has much larger windows, new flight computers and avionics, and redesigned solar arrays, and a modified outer mold line from the initial cargo Dragon that has been flying for several years."
    }
  ]
}
